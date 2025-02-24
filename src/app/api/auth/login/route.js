import { verifyPassword } from '@/utils/passwordUtils';
import { dbConnect } from '../../databases/config';
import { UsersResponses } from '@/factories/success';
import { UsersServices } from '../../services/users';
import { GeneralErrors, UsersErrors } from '@/factories/errors';
import { validatorMiddleware } from '../../middlewares';
import { validateLoginReq } from '@/schemas/authSchema';
import { generateToken } from '@/utils/jwtUtils';

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();

    const { errors } = await validatorMiddleware(validateLoginReq, data);

    if (errors) return GeneralErrors.badRequestErr({ customMessage: errors });

    const { email, password } = data;

    const { user } = await UsersServices.getUserByEmail({ email });

    if (!user) return UsersErrors.invalidCredentials();

    const isPasswordMatch = await verifyPassword({
      password,
      hashedPassword: user.password,
    });

    if (!isPasswordMatch) return UsersErrors.invalidCredentials();

    const accessToken = generateToken({ email: user.email, _id: user._id });

    return UsersResponses.loginSuccessfully({
      user: { _id: user._id, email: user.email },
      accessToken,
    });
  } catch (error) {
    console.error('Login error:', error);
    return GeneralErrors.internalServerErr();
  }
}
