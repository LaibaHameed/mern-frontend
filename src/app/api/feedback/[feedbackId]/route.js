import {dbConnect} from '@/app/api/databases/config';
import {FeedbackErrors, GeneralErrors} from '@/factories/errors';
import {MongoFactoryServices} from '@/app/api/services/mongoFactory';
import {FeedbacksModel} from '@/app/api/models';
import {FeedbackResponses} from '@/factories/success';

export async function DELETE(req, {params}) {
  await dbConnect();

  const {feedbackId} = await params;

  if (!feedbackId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Feedback ID is required',
    });
  }

  const {error} = await MongoFactoryServices.deleteById({
    model: FeedbacksModel,
    id: feedbackId,
  });

  if (error) {
    return FeedbackErrors.feedbackDeleteFailed();
  }

  return FeedbackResponses.feedbackDeletedSuccessfully();
}

export async function PATCH(req, { params }) {
    await dbConnect();

    const {feedbackId} = await params;

    if (!feedbackId) {
      return GeneralErrors.badRequestErr({
        customMessage: 'Feedback ID is required',
      });
    }

    const updateData = await req.json(); 

    const { error, response: updatedFeedbackStatus } = await MongoFactoryServices.updateById({
        model: FeedbacksModel,
        id: feedbackId,
        updateData,
    });

    if (error) {
        return GeneralErrors.serverErr({
            customMessage: 'Failed to update Feedback',
        });
    }

    if (!updatedFeedbackStatus) {
        return FeedbackErrors.feedbackUpdationFailed();
    }

    return FeedbackResponses.feedbackUpdatedSuccessfully({feedback: updatedFeedbackStatus});
}
