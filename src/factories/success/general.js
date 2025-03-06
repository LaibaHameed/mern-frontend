import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  contactSubmitSuccessfully: ({contact}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Your message has been sent successfully',
      body: {
        contact,
      },
    });
  },
};
