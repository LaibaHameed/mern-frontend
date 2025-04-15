import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const ordersSchema = new Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Products',
          required: true,
        },
        // productName: {
        //   type: String,
        //   required: true,
        // },
        // productPrice: {
        //   type: Number,
        //   required: true,
        // },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhoneNo: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
      default: 'placed',
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = models.Orders || model('Orders', ordersSchema);

export default Order;
