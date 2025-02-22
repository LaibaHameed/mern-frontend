import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  registeredSuccessfully: ({user}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'User registered successfully',
      body: {
        user,
      },
    });
  },
  loginSuccessfully: ({user, accessToken}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'User login successfully',
      body: {
        user,
        accessToken,
      },
    });
  },
};
