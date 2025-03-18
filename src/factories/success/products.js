import { AppResponse } from '../utils/response';
import { StatusCodes } from 'http-status-codes';

export default {
  productAddedSuccessfully: ({ product }) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Product added successfully',
      body: {
        product,
      },
    });
  },
  productsFetchedSuccessfully: ({ products, pagination }) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      body: {
        products,
        pagination
      },
    });
  },
  productFetchedSuccessfully: ({ product }) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      body: {
        product,
      },
    });
  },
  productDeletedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Product Deleted successfully',
    });
  },
};
