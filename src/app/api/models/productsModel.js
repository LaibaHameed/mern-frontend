import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],
    availableQty: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Product = models.Products || model('Products', productsSchema);

export default Product;
