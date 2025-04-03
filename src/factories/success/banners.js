import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  bannerAddedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Banner added successfully',
      body: {},
    });
  },
  bannersFetchedSuccessfully: ({banners, pagination}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Banners fetched successfully',
      body: {
        banners,
        pagination,
      },
    });
  },
  bannerDeletedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Banner deleted successfully',
      body: {},
    });
  },
};
