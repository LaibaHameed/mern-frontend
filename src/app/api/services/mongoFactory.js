import { SORT_OPTIONS } from '@/constants/general';
import { asyncTryCatch } from '@/utils/tryCatchUtils';

export const MongoFactoryServices = {
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
  findOne: async ({ model, query }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.findOne(query)
    );
    return { success, error, response };
  },
  findById: async ({ model, id }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.findById(id)
    );
    return { success, error, response };
  },
  findAll: async ({ model, query = {}, options, sortOption = "default", populate = null, }) => {
    const sort = SORT_OPTIONS[sortOption] || SORT_OPTIONS.default;
    const { success, error, response: data } = await asyncTryCatch(async () => {
      let Query = model.find(query, null, options).sort(sort);
      if (populate) {
        Query = Query.populate(populate);
      }
      const [docs, total] = await Promise.all([
        Query.exec(),
        model.countDocuments(query),
      ]);
      return { docs, total };
    });
    return { success, error, response: data };
  },
  deleteById: async ({ model, id }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.findByIdAndDelete(id)
    );
    return { success, error, response };
  },
  updateById: async ({ model, id, updateData }) => {
    const { success, error, response } = await asyncTryCatch(
      async () => await model.findByIdAndUpdate(id, updateData, { new: true })
    );
    return { success, error, response };
  },
};
