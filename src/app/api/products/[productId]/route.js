import { ProductsModel, RatingsModel } from '../../models';
import { dbConnect } from '../../databases/config';
import { ProductResponses } from '@/factories/success';
import { MongoFactoryServices } from '../../services/mongoFactory';
import { GeneralErrors, ProductsErrors } from '@/factories/errors';

export async function GET(req, { params }) {
  await dbConnect();

  const { productId } = await params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const { error, response: product } = await MongoFactoryServices.findById({
    model: ProductsModel,
    id: productId,
  });

  const formattedProduct = product.toObject();

  const ratings = (await RatingsModel.find({ productId })) || [];

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

  return ProductResponses.productFetchedSuccessfully({ product: finalProduct });
}

export async function DELETE(req, { params }) {
  await dbConnect();

  const { productId } = await params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const { error } = await MongoFactoryServices.deleteById({
    model: ProductsModel,
    id: productId,
  });

  if (error) {
    return ProductsErrors.productDeletionFailed();
  }

  return ProductResponses.productDeletedSuccessfully();
}

export async function PUT(req, { params }) {
  await dbConnect();

  const { productId } = await params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const updatedData = await req.json();

  const { error, response: updatedProduct } = await MongoFactoryServices.updateById({
    model: ProductsModel,
    id: productId,
    updateData: updatedData,
  });

  if (error) {
    return GeneralErrors.serverErr({
      customMessage: 'Failed to update product',
    });
  }

  if (!updatedProduct) {
    return ProductsErrors.productNotFoundErr();
  }

  return ProductResponses.productUpdatedSuccessfully({ product: updatedProduct });
}