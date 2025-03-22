import {GeneralErrors} from '@/factories/errors';
import {dbConnect} from '../databases/config';
import {MongoFactoryServices} from '../services/mongoFactory';
import {ProductResponses} from '@/factories/success';
import {DEFAULT_LIMIT, DEFAULT_PAGES} from '@/constants/general';
import {ProductsModel} from '../models';

export async function GET(req) {
  await dbConnect();

  const {searchParams} = new URL(req.url);
  const limit = parseInt(searchParams.get('limit')) || DEFAULT_LIMIT;
  const page = parseInt(searchParams.get('page')) || DEFAULT_PAGES;
  const search = searchParams.get('search') || '';
  const sortOption = searchParams.get('sort') || 'default';

  const skip = (page - 1) * limit;

  const query = search
    ? {
        $or: [
          {name: {$regex: search, $options: 'i'}},
          {code: {$regex: search, $options: 'i'}},
        ],
      }
    : {};

  const {success, error, response} = await MongoFactoryServices.findAll({
    model: ProductsModel,
    query,
    options: {skip, limit},
    sortOption,
  });

  if (!success) {
    return GeneralErrors.internalServerErr({customMessage: error});
  }

  const {docs: products, total} = response;

  return ProductResponses.productsFetchedSuccessfully({
    products,
    pagination: {
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    },
  });
}
