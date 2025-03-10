import * as nodemailer from 'nodemailer';

export const sendEmail = ({to, subject, html}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};
