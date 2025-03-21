import {OrdersModel} from '../models';
import {MongoFactoryServices} from './mongoFactory';

export const OrdersServices = {
  createOrder: async ({data}) => {
    const {
      error,
      response: order,
      success,
    } = await MongoFactoryServices.create({model: OrdersModel, data});

    return {error, order, success};
  },
};
