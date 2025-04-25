import { sendEmail } from './index';

export const sendOrderCompletionEmailToCustomer = ({ data }) => {
    const {
        customerName,
        customerEmail,
        _id,
        products,
        totalPrice,
        customerAddress,
    } = data;

    const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0097b2; text-align: center;">Order Completed</h2>
      <p style="font-size: 16px;">Hi <strong>${customerName}</strong>,</p>
      <p style="font-size: 14px;">We’re excited to let you know that your order has been <strong>successfully completed</strong>. We hope you enjoy your purchase!</p>

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px;">Order Details</h3>
      <p><strong>Order ID:</strong> ${_id}</p>

      <h3 style="padding-bottom: 5px; margin-top: 20px;">Products</h3>
      ${products
            .map(
                (item) => `
            <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 10px 0;">
              <img src="${item.productId.imageUrls[0]}" alt="${item.productId.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
              <div>
                <p style="margin: 0; font-size: 16px; font-weight: bold;">${item.productId.name}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Quantity:</strong> ${item.quantity}</p>
              </div>
            </div>
          `
            )
            .join('')}

      <h3 style="border-bottom: 2px solid #0097b2; padding-bottom: 5px; margin-top: 20px;">Delivery Summary</h3>
      <p><strong>Total Price:</strong> Rs. ${totalPrice} PKR</p>
      <p><strong>Shipping Address:</strong> ${customerAddress}</p>

      <p style="font-size: 14px; text-align: center; margin-top: 20px;">Thank you for shopping with us. We look forward to serving you again!</p>
      <p style="text-align: center;">Best Regards,<br>Hommy Decor</p>
    </div>
  `;

    sendEmail({ to: customerEmail, subject: 'Your Order is Completed!', html });
};
