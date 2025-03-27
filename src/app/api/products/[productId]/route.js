import { ProductsModel, RatingsModel } from '../../models';
import { dbConnect } from '../../databases/config';
import { ProductResponses } from '@/factories/success';
import { MongoFactoryServices } from '../../services/mongoFactory';
import { GeneralErrors, ProductsErrors } from '@/factories/errors';
import { FilesServices } from '../../services/files';

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

  if (error || !product) {
    return ProductsErrors.productNotFoundErr();
  }

  const formattedProduct = product.toObject();

  const ratings = (await RatingsModel.find({ productId })) || [];

  const total = ratings.reduce((sum, item) => sum + item.rating, 0);

  const average = ratings.length > 0 ? total / ratings.length : 0;

  let finalProduct = {
    ...formattedProduct,
    ratings,
    averageRating: average,
  };

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

export async function PATCH(req, { params }) {
  await dbConnect();

  const { productId } = await params;

  if (!productId) {
    return GeneralErrors.badRequestErr({
      customMessage: 'Product ID is required',
    });
  }

  const formData = await req.formData();
  const jsonData = JSON.parse(formData.get("data"));
  const files = formData.getAll('files');
  const removedImages = jsonData.removedImages || [];

  let imageUrls = jsonData.imageUrls || [];

  imageUrls = imageUrls.filter(img => !removedImages.includes(img));

  if (files.length > 0) {
    let uploadedImageUrls = [];

    for (const file of files) {
      const { success, imageUrl } = await FilesServices.upload({ file });
      if (success) uploadedImageUrls.push(imageUrl);
    }

    imageUrls = [...imageUrls, ...uploadedImageUrls];
  }

  const finalData = {
    ...jsonData,
    imageUrls,
  };


  const { error, response: updatedProduct } = await MongoFactoryServices.updateById({
    model: ProductsModel,
    id: productId,
    updateData: finalData,
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
