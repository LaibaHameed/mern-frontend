import {hashPassword} from '@/utils/passwordUtils';
import {dbConnect} from '../../databases/config';
import {UsersModel} from '../../models';
import {UsersResponses} from '@/factories/success';
import {UsersServices} from '../../services/users';
import {GeneralErrors, UsersErrors} from '@/factories/errors';
import {validatorMiddleware} from '../../middlewares';
import {validateCreateUserReq} from '@/schemas/authSchema';

export async function POST(request) {
  await dbConnect();

  const data = await request.json();

  const {errors} = await validatorMiddleware(validateCreateUserReq, data);

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  const {name, email, password} = data;

  const {user} = await UsersServices.getUserByEmail({email});

  if (user) return UsersErrors.userAlreadyExist();

  let finalData = {
    name,
    email,
    password: await hashPassword({password}),
  };

  const newUser = await UsersModel.create(finalData);

  return UsersResponses.registeredSuccessfully({user: newUser});
}
