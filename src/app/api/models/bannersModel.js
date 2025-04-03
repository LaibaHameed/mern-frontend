import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const bannersSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Banner = models.Banners || model('Banners', bannersSchema);

export default Banner;
