import {dbConnect} from '@/app/api/databases/config';
import {BannersErrors, GeneralErrors} from '@/factories/errors';
import {MongoFactoryServices} from '@/app/api/services/mongoFactory';
import {BannersModel} from '@/app/api/models';
import {BannersResponses} from '@/factories/success';

export async function DELETE(req, {params}) {
  await dbConnect();

  const {bannerId} = await params;

  if (!bannerId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Banner ID is required',
    });
  }

  const {error} = await MongoFactoryServices.deleteById({
    model: BannersModel,
    id: bannerId,
  });

  if (error) {
    return BannersErrors.bannerDeleteFailed();
  }

  return BannersResponses.bannerDeletedSuccessfully();
}
