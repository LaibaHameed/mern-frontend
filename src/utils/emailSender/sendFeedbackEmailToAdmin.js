import {sendEmail} from './index';

export const sendFeedbackEmailToAdmin = ({data}) => {
  const {userName, userEmail, feedbackMessage, _id} = data;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0097b2; text-align: center;">New Website Feedback Received</h2>
      <p style="font-size: 16px;">Hello Admin,</p>
      <p style="font-size: 14px;">A new feedback has been submitted on the website. Please review the details below:</p>
      
      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px;">Feedback Information</h3>
      <p><strong>Feedback ID:</strong> ${_id}</p>
      <p><strong>User Name:</strong> ${userName}</p>
      <p><strong>User Email:</strong> ${userEmail}</p>
      <p><strong>Feedback Message:</strong></p>
      <p style="background: #f9f9f9; padding: 10px; border-radius: 4px;">${feedbackMessage}</p>
      
      <p style="font-size: 14px; text-align: center; margin-top: 20px;">Please take the necessary actions to approve or disapprove this feedback.</p>
      <p style="text-align: center;">Best Regards,<br>Hommy Decor</p>
    </div>
  `;

  sendEmail({
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: 'New Website Feedback Received',
    html,
  });
};
