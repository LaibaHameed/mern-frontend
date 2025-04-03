import {AppError} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  bannerUploadingFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Banners uploading failed',
    });
  },
  bannerDeleteFailed: () => {
    return AppError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: 'Banners deletion failed',
    });
  },
};
