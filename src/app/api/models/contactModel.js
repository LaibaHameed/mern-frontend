import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Contact = models.Contacts || model('Contacts', contactSchema);

export default Contact;
