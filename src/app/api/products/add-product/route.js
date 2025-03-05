import {dbConnect} from '../../databases/config';
import {ProductResponses} from '@/factories/success';
import {GeneralErrors, ProductsErrors} from '@/factories/errors';
import {validatorMiddleware} from '../../middlewares';
import {validateAddProductReq} from '@/schemas/ProductSchema';
import {FilesServices} from '../../services/files';
import {MongoFactoryServices} from '../../services/mongoFactory';
import {ProductsModel} from '../../models';

export async function POST(request) {
  await dbConnect();

  const formData = await request.formData();

  const productInfo = JSON.parse(formData.get('data'));
  const files = formData.getAll('files');

  const {errors} = await validatorMiddleware(
    validateAddProductReq,
    productInfo
  );

  if (errors) return GeneralErrors.badRequestErr({customMessage: errors});

  if (files.length === 0)
    return GeneralErrors.badRequestErr({
      customMessage: 'Please select product image(s)',
    });

  let imageUrls = [];

  for (const file of files) {
    const {success, imageUrl} = await FilesServices.upload({file});
    if (success) imageUrls.push(imageUrl);
  }

  if (imageUrls.length === 0) return ProductsErrors.productAddFailed();

  let finalData = {
    ...productInfo,
    imageUrls,
  };

  const {error, response: newCreatedProduct} =
    await MongoFactoryServices.create({
      data: finalData,
      model: ProductsModel,
    });

  if (error) return ProductsErrors.productAddFailed();

  return ProductResponses.productAddedSuccessfully({
    product: newCreatedProduct,
  });
}
