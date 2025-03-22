import {validateFeedbackReq} from '@/schemas/feedbackSchema';
import {dbConnect} from '../../databases/config';
import {validatorMiddleware} from '../../middlewares';
import {FeedbackErrors, GeneralErrors} from '@/factories/errors';
import {MongoFactoryServices} from '../../services/mongoFactory';
import {FeedbacksModel} from '../../models';
import {FeedbackResponses} from '@/factories/success';

export async function POST(request) {
  await dbConnect();

  const data = await request.json();

  const {errors} = await validatorMiddleware(validateFeedbackReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const {error, response: feedback} = await MongoFactoryServices.create({
    model: FeedbacksModel,
    data,
  });

  if (error) return FeedbackErrors.feedbackCreationFailed();

  return FeedbackResponses.feedbackSubmittedSuccessfully({feedback});
}
