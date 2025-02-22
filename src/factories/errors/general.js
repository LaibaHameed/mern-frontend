import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  badRequestErr: ({customMessage} = {}) => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: customMessage || 'Bad Request',
    });
  },
  internalServerErr: () => {
    return AppError({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  },
};
