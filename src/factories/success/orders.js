import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  checkoutUrlRetrievedSuccessfully: ({checkout_url}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Checkout url retrieved successfully',
      body: {
        checkout_url,
      },
    });
  },
  orderCreatedSuccessfully: ({order}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Order created successfully',
      body: {
        order,
      },
    });
  },
  paymentCompletedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Payment completed successfully',
      body: {
        order,
      },
    });
  },
};
