import {PAYMENT_METHODS} from '@/constants/general';
import {sendEmail} from './index';

export const sendOrderReceivingEmailToAdmin = ({data}) => {
  const {
    customerName,
    customerEmail,
    customerPhoneNo,
    products,
    totalPrice,
    customerAddress,
    orderStatus,
    paymentMethod,
    _id,
  } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0097b2; text-align: center;">New Order Received</h2>
      <p style="font-size: 16px;">Hello Admin,</p>
      <p style="font-size: 14px;">A new order has been placed. Please review the order details below:</p>
      
      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px;">Order Information</h3>
      <p><strong>Order ID:</strong> ${_id}</p>
      <p><strong>Order Status:</strong> ${orderStatus}</p>
      <p><strong>Payment Method:</strong> ${
        PAYMENT_METHODS[paymentMethod].label
      }</p>

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Customer Details</h3>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Phone Number:</strong> ${customerPhoneNo}</p>
      <p><strong>Shipping Address:</strong> ${customerAddress}</p>

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Ordered Products</h3>
      ${products
        .map(
          (item) => `
            <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 10px 0;">
              <img src="${item.productId.imageUrls[0]}" alt="${item.productId.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
              <div>
                <p style="margin: 0; font-size: 16px; font-weight: bold;">${item.productId.name}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Price:</strong> Rs. ${item.productId.price} PKR</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Quantity:</strong> ${item.quantity}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Code:</strong> ${item.productId.code}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Brand:</strong> ${item.productId.brand}</p>
              </div>
            </div>
          `
        )
        .join('')}

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Order Summary</h3>
      <p><strong>Total Price:</strong> Rs. ${totalPrice} PKR</p>

      <p style="font-size: 14px; text-align: center; margin-top: 20px;">Please take the necessary actions to process this order.</p>
      <p style="text-align: center;">Best Regards,<br>Hommy Decor</p>
    </div>
  `;

  sendEmail({
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: 'New Order Received',
    html,
  });
};
