import {ProductsModel, RatingsModel} from '../../models';
import {dbConnect} from '../../databases/config';
import {ProductResponses} from '@/factories/success';
import {MongoFactoryServices} from '../../services/mongoFactory';
import {GeneralErrors, ProductsErrors} from '@/factories/errors';

export async function GET(req, {params}) {
  await dbConnect();

  const {productId} = await params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const {error, response: product} = await MongoFactoryServices.findById({
    model: ProductsModel,
    id: productId,
  });

  const formattedProduct = product.toObject();

  const ratings = (await RatingsModel.find({productId})) || [];

  const total = ratings.reduce((sum, item) => sum + item.rating, 0);

  const average = total / ratings.length;

  let finalProduct = {
    ...formattedProduct,
    ratings,
    averageRating: average,
  };

  if (error || !product) {
    return ProductsErrors.productNotFoundErr();
  }

  return ProductResponses.productFetchedSuccessfully({product: finalProduct});
}

export async function DELETE(req, {params}) {
  await dbConnect();

  const {productId} = params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const {error} = await MongoFactoryServices.deleteById({
    model: ProductsModel,
    id: productId,
  });

  if (error) {
    return ProductsErrors.productDeletionFailed();
  }

  return ProductResponses.productDeletedSuccessfully();
}
