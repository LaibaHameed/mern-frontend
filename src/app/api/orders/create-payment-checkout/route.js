import {validatorMiddleware} from '../../middlewares';
import {validateCreateOrderReq} from '@/schemas/orderSchema';
import {GeneralErrors, OrdersErrors} from '@/factories/errors';
import {StripeServices} from '../../services/stripe';
import {OrderResponses} from '@/factories/success';
import {ORDER_STATUSES} from '@/constants/general';

export async function POST(request) {
  const data = await request.json();

  const {errors} = await validatorMiddleware(validateCreateOrderReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const line_items = data.products.map((product) => ({
    price_data: {
      currency: 'pkr',
      product_data: {
        name: product.name,
        images: product.imageUrls,
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const metadata = {
    ...data,
    orderStatus: ORDER_STATUSES.placed.value,
    products: JSON.stringify(
      data.products.map((product) => ({
        productId: product._id.toString(),
        quantity: product.quantity,
      }))
    ),
  };

  const {error, session} = await StripeServices.createCheckoutPaymentSession({
    line_items,
    metadata,
  });

  if (error) return OrdersErrors.checkoutSessionFailed();

  return OrderResponses.checkoutUrlRetrievedSuccessfully({
    checkout_url: session.url,
  });
}
