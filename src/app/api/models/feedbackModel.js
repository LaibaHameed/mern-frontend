import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
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

const Feedback = models.Feedbacks || model('Feedbacks', feedbackSchema);

export default Feedback;
