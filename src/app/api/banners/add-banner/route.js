import {BannersErrors, GeneralErrors} from '@/factories/errors';
import {dbConnect} from '../../databases/config';
import {FilesServices} from '../../services/files';
import {MongoFactoryServices} from '../../services/mongoFactory';
import {BannersModel} from '../../models';
import {BannersResponses} from '@/factories/success';

export async function POST(request) {
  await dbConnect();

  const formData = await request.formData();

  const file = formData.get('file');

  if (!file)
    return GeneralErrors.badRequestErr({
      customMessage: 'Please select banner image',
    });

  const {error: imageUploadErr, imageUrl} = await FilesServices.upload({
    file,
    folder: 'banners',
  });

  if (imageUploadErr) return BannersErrors.bannerUploadingFailed();

  const {error} = await MongoFactoryServices.create({
    data: {imageUrl},
    model: BannersModel,
  });

  if (error) return BannersErrors.bannerUploadingFailed();

  return BannersResponses.bannerAddedSuccessfully();
}
