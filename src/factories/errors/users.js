import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  registrationFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'User registration failed',
    });
  },
  userAlreadyExist: () => {
    return AppError({
      statusCode: StatusCodes.CONFLICT,
      message: 'User already exist',
    });
  },
  invalidCredentials: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Invalid Credentials',
    });
  },
};
