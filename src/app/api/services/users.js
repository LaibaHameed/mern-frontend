import {UsersModel} from '../models';
import {MongoFactoryServices} from './mongoFactory';

export const UsersServices = {
  getUserByEmail: async ({email}) => {
    const {
      success,
      response: user,
      error,
    } = await MongoFactoryServices.findOne({
      model: UsersModel,
      query: {email},
    });
    return {success, user, error};
  },
};
