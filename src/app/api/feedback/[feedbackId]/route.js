import {dbConnect} from '@/app/api/databases/config';
import {BannersErrors, FeedbackErrors, GeneralErrors} from '@/factories/errors';
import {MongoFactoryServices} from '@/app/api/services/mongoFactory';
import {BannersModel, FeedbacksModel} from '@/app/api/models';
import {BannersResponses, FeedbackResponses} from '@/factories/success';

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
