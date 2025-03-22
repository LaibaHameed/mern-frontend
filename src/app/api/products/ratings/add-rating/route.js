import {dbConnect} from '@/app/api/databases/config';
import {validatorMiddleware} from '@/app/api/middlewares';
import {RatingsModel} from '@/app/api/models';
import {MongoFactoryServices} from '@/app/api/services/mongoFactory';
import {GeneralErrors, RatingsErrors} from '@/factories/errors';
import {RatingsResponses} from '@/factories/success';
import {validateRatingReq} from '@/schemas/ratingsSchema';

export async function POST(request) {
  await dbConnect();

  const data = await request.json();

  const {errors} = await validatorMiddleware(validateRatingReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const {error, response: ratings} = await MongoFactoryServices.create({
    model: RatingsModel,
    data,
  });

  if (error) return RatingsErrors.ratingsCreationFailed();

  return RatingsResponses.ratingsSubmittedSuccessfully({ratings});
}
