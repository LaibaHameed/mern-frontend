import {asyncTryCatch} from '@/utils/tryCatchUtils';

export const MongoFactoryServices = {
  findOne: async ({model, query}) => {
    const {success, error, response} = await asyncTryCatch(
      async () => await model.findOne(query)
    );
    return {success, error, response};
  },
  create: async ({model, data, session = null}) => {
    const {success, error, response} = await asyncTryCatch(async () => {
      if (Array.isArray(data)) {
        return await model.create(data, {session});
      } else {
        const doc = new model(data);
        return await doc.save({session});
      }
    });
    return {success, error, response};
  },
  find: async ({model, query}) => {
    const {success, error, response} = await asyncTryCatch(
      async () => await model.find(query)
    );
    return {success, error, response};
  },
  getAll : async ({model}) => {
    const {success, error, response} = await asyncTryCatch(
      async () => await model.find({})
    );
    return {success, error, response};
  }
};
