import {DEFAULT_LIMIT, DEFAULT_PAGES} from '@/constants/general';
import {dbConnect} from '../../databases/config';
import {MongoFactoryServices} from '../../services/mongoFactory';
import {RatingsModel} from '../../models';
import {GeneralErrors} from '@/factories/errors';
import {RatingsResponses} from '@/factories/success';

export async function GET(req) {
  await dbConnect();

  const {searchParams} = new URL(req.url);
  const limit = parseInt(searchParams.get('limit')) || DEFAULT_LIMIT;
  const page = parseInt(searchParams.get('page')) || DEFAULT_PAGES;
  const search = searchParams.get('search') || '';

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
    model: RatingsModel,
    query,
    options: {skip, limit},
  });

  if (!success) {
    return GeneralErrors.internalServerErr({customMessage: error});
  }

  const {docs: ratings, total} = response;

  return RatingsResponses.ratingsFetchedSuccessfully({
    ratings,
    pagination: {
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    },
  });
}
