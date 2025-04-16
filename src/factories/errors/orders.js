import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  checkoutSessionFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Checkout redirection failed',
    });
  },
  orderCreationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Order creation failed',
    });
  },
  orderUpdationFailed: () => {
    return AppError({
      statusCode: StatusCodes.NOT_MODIFIED,
      message: 'Order updation failed',
    });
  },
};
