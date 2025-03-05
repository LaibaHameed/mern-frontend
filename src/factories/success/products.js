import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  productAddedSuccessfully: ({product}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Product added successfully',
      body: {
        product,
      },
    });
  },
};
