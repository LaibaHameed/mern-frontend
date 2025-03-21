import {validatorMiddleware} from '../../middlewares';
import {validateCreateOrderReq} from '@/schemas/orderSchema';
import {GeneralErrors, OrdersErrors} from '@/factories/errors';
import {OrderResponses} from '@/factories/success';
import {OrdersServices} from '../../services/orders';
import {ORDER_STATUSES} from '@/constants/general';
import {sendOrderConfirmationEmailToCustomer} from '@/utils/emailSender/sendOrderConfirmEmailToCustomer';
import {sendOrderReceivingEmailToAdmin} from '@/utils/emailSender/sendOrderRecievingEmailToAdmin';

export async function POST(request) {
  let data = await request.json();

  data = {
    ...data,
    orderStatus: ORDER_STATUSES.placed.value,
    products: data.products.map((product) => ({
      productId: product._id,
      quantity: product.quantity,
    })),
  };

  const {errors} = await validatorMiddleware(validateCreateOrderReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const {error, order} = await OrdersServices.createOrder({data});

  await order.populate([{path: 'products.productId'}]);

  if (error) return OrdersErrors.orderCreationFailed();

  if (order) {
    sendOrderConfirmationEmailToCustomer({data: order});
    sendOrderReceivingEmailToAdmin({data: order});
  }

  return OrderResponses.orderCreatedSuccessfully({
    order,
  });
}
