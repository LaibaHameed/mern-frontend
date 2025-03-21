import {headers} from 'next/headers';
import {StripeServices} from '../../services/stripe';
import {OrdersServices} from '../../services/orders';
import {OrderResponses} from '@/factories/success';
import {OrdersErrors} from '@/factories/errors';
import {sendOrderConfirmationEmailToCustomer} from '@/utils/emailSender/sendOrderConfirmEmailToCustomer';
import {sendOrderReceivingEmailToAdmin} from '@/utils/emailSender/sendOrderRecievingEmailToAdmin';

export async function POST(request) {
  const headersList = await headers();
  const signatureHeader = headersList.get('stripe-signature');
  const body = await request.text();

  let event;

  try {
    event = StripeServices.webhookEvent({body, signature: signatureHeader});

    if (event) {
      if (event.type === 'payment_intent.succeeded')
        return OrderResponses.paymentCompletedSuccessfully();

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        const finalData = {
          ...session.metadata,
          products: JSON.parse(session.metadata.products),
          totalPrice: Number(session.metadata.totalPrice),
        };

        const {error, order, success} = await OrdersServices.createOrder({
          data: finalData,
        });

        await order.populate([{path: 'products.productId'}]);

        if (order) {
          sendOrderConfirmationEmailToCustomer({data: order});
          sendOrderReceivingEmailToAdmin({data: order});
        }

        if (success) return OrderResponses.orderCreatedSuccessfully({order});

        if (error) return OrdersErrors.orderCreationFailed();
      }
    }
  } catch (error) {
    return OrdersErrors.orderCreationFailed();
  }
}
