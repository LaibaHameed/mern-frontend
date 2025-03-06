import {sendEmail} from './index';

export const sendContactFormEmailToUser = ({data}) => {
  const {name, email, subject, message} = data;

  const html = `<div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #4CAF50;">Thank You for Contacting Us</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p><strong>Message Details:</strong></p>
            <p><em>Subject:</em> ${subject}</p>
            <p><em>Message:</em> ${message}</p>
            <p>Best Regards,<br> Your Company</p>
        </div>`;

  sendEmail({to: email, subject, html});
};
