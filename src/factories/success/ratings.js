import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  ratingsSubmittedSuccessfully: ({ratings}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Thanks for your ratings',
      body: {
        ratings,
      },
    });
  },
  ratingsFetchedSuccessfully: ({ratings, pagination}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Ratings fetched successfully',
      body: {
        ratings,
        pagination,
      },
    });
  },
};
