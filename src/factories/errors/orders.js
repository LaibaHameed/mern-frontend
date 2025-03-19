import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  checkoutSessionFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Checkout redirection failed',
    });
  },
};
