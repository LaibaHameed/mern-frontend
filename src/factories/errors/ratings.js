import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  ratingsCreationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Ratings submission failed',
    });
  },
};
