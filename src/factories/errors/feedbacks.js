import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  feedbackCreationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Feedback submission failed',
    });
  },
  feedbackDeleteFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Feedback deletion failed',
    });
  },
  feedbackUpdationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Feedback updation failed',
    });
  },
};
