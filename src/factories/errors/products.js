import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  productAddFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Products registration failed',
    });
  },
  productNotFoundErr: () => {
    return AppError({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Product Not Found',
    });
  }
};
