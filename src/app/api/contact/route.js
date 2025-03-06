import {validateContactReq} from '@/schemas/general';
import {dbConnect} from '../databases/config';
import {validatorMiddleware} from '../middlewares';
import {GeneralErrors} from '@/factories/errors';
import {MongoFactoryServices} from '../services/mongoFactory';
import {ContactsModel} from '../models';
import {GeneralResponses} from '@/factories/success';

export async function POST(request) {
  await dbConnect();

  const data = await request.json();

  const {errors} = await validatorMiddleware(validateContactReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const {error, response: contact} = await MongoFactoryServices.create({
    model: ContactsModel,
    data,
  });

  if (error) return GeneralErrors.contactErr();

  return GeneralResponses.contactSubmitSuccessfully({contact});
}
