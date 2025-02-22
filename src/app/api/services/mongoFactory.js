import {asyncTryCatch} from '@/utils/tryCatchUtils';

export const MongoFactoryServices = {
  findOne: async ({model, query}) => {
    const {success, error, response} = await asyncTryCatch(
      async () => await model.findOne(query)
    );
    return {success, error, response};
  },
};
