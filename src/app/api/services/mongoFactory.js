import { asyncTryCatch } from '@/utils/tryCatchUtils';

export const MongoFactoryServices = {
  findOne: async ({ model, query }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.findOne(query)
    );
    return { success, error, response };
  },
  create: async ({ model, data, session = null }) => {
    const { success, error, response } = await asyncTryCatch(async () => {
      if (Array.isArray(data)) {
        return await model.create(data, { session });
      } else {
        const doc = new model(data);
        return await doc.save({ session });
      }
    });
    return { success, error, response };
  },
  find: async ({ model, query }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.find(query)
    );
    return { success, error, response };
  },
  findAll: async ({ model, query = {}, options }) => {
    const { success, error, response: data } = await asyncTryCatch(
      async () => {
        const [products, total] = await Promise.all([
          model.find(query, null, options),
          model.countDocuments(query),
        ]);
        return { products, total };
      }
    );
    return { success, error, response: data };
  }

};
