import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const User = models.Users || model('Users', userSchema);

export default User;
