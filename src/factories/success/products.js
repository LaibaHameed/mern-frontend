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
      message: 'Products fetched successfully',
      body: {
        products,
        pagination
      },
    });
  },
  productFetchedSuccessfully: ({ product }) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Product fetched successfully',
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
  productUpdatedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Product updated successfully',
    });
  }
};
