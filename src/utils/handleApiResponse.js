import {showToast} from './toasts';
import {asyncTryCatch} from './tryCatchUtils';

export const handleApiResponse = async ({
  queryFulfilled,
  toastMessage = {
    success: {show: true, customMessage: ''},
    error: {show: true, customMessage: ''},
  },
}) => {
  const {
    success,
    error: errorObj,
    response,
  } = await asyncTryCatch(() => queryFulfilled);

  let responseObject;

  if (success) {
    responseObject = {
      statusCode: response.data.statusCode,
      message: response.data.message,
      body: response.data.body,
    };
    if (toastMessage.success.show)
      showToast({
        type: 'success',
        message: toastMessage.success.customMessage || response.data.message,
      });
  }

  if (errorObj) {
    const {
      error,
      message: errorMessage,
      statusCode,
    } = errorObj?.error?.data || {};
    responseObject = {
      statusCode,
      message: errorMessage,
      body: null,
      error,
    };

    const message = errorMessage || 'Something went wrong';

    if (toastMessage.error.show)
      showToast({
        type: 'error',
        message: toastMessage.error.customMessage || message,
      });
  }

  return responseObject;
};
