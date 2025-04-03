import {GeneralErrors} from '@/factories/errors';
import {dbConnect} from '../databases/config';
import {MongoFactoryServices} from '../services/mongoFactory';
import {BannersResponses} from '@/factories/success';
import {DEFAULT_LIMIT, DEFAULT_PAGES} from '@/constants/general';
import {BannersModel} from '../models';

export async function GET(req) {
  await dbConnect();

  const {searchParams} = new URL(req.url);
  const limit = parseInt(searchParams.get('limit')) || DEFAULT_LIMIT;
  const page = parseInt(searchParams.get('page')) || DEFAULT_PAGES;

  const skip = (page - 1) * limit;

  const {success, error, response} = await MongoFactoryServices.findAll({
    model: BannersModel,
    options: {skip, limit},
  });

  if (!success) {
    return GeneralErrors.internalServerErr({customMessage: error});
  }

  const {docs: banners, total} = response;

  return BannersResponses.bannersFetchedSuccessfully({
    banners,
    pagination: {
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    },
  });
}
