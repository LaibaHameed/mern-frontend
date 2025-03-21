import {PAYMENT_METHODS} from '@/constants/general';
import {sendEmail} from './index';

export const sendOrderConfirmationEmailToCustomer = ({data}) => {
  const {
    customerName,
    customerEmail,
    products,
    totalPrice,
    customerAddress,
    orderStatus,
    paymentMethod,
    _id,
  } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0097b2; text-align: center;">Order Confirmation</h2>
      <p style="font-size: 16px;">Hi <strong>${customerName}</strong>,</p>
      <p style="font-size: 14px;">Thank you for your order! Your order has been successfully placed and is now being processed.</p>
      
      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px;">Order Details</h3>
      <p><strong>Order ID:</strong> ${_id}</p>
      <p><strong>Order Status:</strong> ${orderStatus}</p>
      <p><strong>Payment Method:</strong> ${
        PAYMENT_METHODS[paymentMethod].label
      }</p>

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Products</h3>
      ${products
        .map(
          (item) => `
            <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 10px 0;">
              <img src="${item.productId.imageUrls[0]}" alt="${item.productId.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
              <div>
                <p style="margin: 0; font-size: 16px; font-weight: bold;">${item.productId.name}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Price:</strong> Rs. ${item.productId.price} PKR</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Quantity:</strong> ${item.quantity}</p>
              </div>
            </div>
          `
        )
        .join('')}

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Order Summary</h3>
      <p><strong>Total Price:</strong> Rs. ${totalPrice} PKR</p>
      <p><strong>Shipping Address:</strong> ${customerAddress}</p>

      <p style="font-size: 14px; text-align: center; margin-top: 20px;">We will notify you once your order is shipped.</p>
      <p style="text-align: center;">Best Regards,<br>Hommy Decor</p>
    </div>
  `;

  sendEmail({to: customerEmail, subject: 'Order Confirmation', html});
};
