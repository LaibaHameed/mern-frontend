import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  feedbackCreationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Feedback submission failed',
    });
  },
};
