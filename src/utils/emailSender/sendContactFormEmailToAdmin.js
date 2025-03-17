import {sendEmail} from './index';

export const sendContactFormEmailToAdmin = ({data}) => {
  const {name, subject, message} = data;

  const email = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL;

  const html = `<div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #ff5722;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            <hr>
            <p style="color: gray;">This email was generated automatically by your website.</p>
        </div>`;

  sendEmail({to: email, subject, html});
};
