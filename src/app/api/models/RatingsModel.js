import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const ratingsSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = models.Ratings || model('Ratings', ratingsSchema);

export default Rating;
