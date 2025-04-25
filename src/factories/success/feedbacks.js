import {AppResponse} from '../utils/response';
import {StatusCodes} from 'http-status-codes';

export default {
  feedbackSubmittedSuccessfully: ({feedback}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Your feedback has been submitted successfully',
      body: {
        feedback,
      },
    });
  },
  feedbacksFetchedSuccessfully: ({feedbacks, pagination}) => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Feedbacks fetched successfully',
      body: {
        feedbacks,
        pagination,
      },
    });
  },
  feedbackDeletedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Feedback deleted successfully',
      body: {},
    });
  },
  feedbackUpdatedSuccessfully: () => {
    return AppResponse({
      statusCode: StatusCodes.OK,
      message: 'Feedback Updated successfully',
      body: {},
    });
  },
};
