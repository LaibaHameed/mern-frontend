import { sendEmail } from './index';

export const sendOrderCancelledEmailToCustomer = ({ data }) => {
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
      <h2 style="color: #c53038; text-align: center;">Order Cancelled</h2>
      <p style="font-size: 16px;">Hi <strong>${customerName}</strong>,</p>
      <p style="font-size: 14px;">We regret to inform you that your order with the ID <strong>${_id}</strong> has been <strong>cancelled</strong>.</p>

      <h3 style="border-bottom: 2px solid #c53038; padding-bottom: 5px;">Order Details</h3>
      <p><strong>Order ID:</strong> ${_id}</p>

      <h3 style="border-bottom: 2px solid #c53038; padding-bottom: 5px; margin-top: 20px;">Products</h3>
      ${products
            .map(
                (item) => `
            <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 10px 0;">
              <img src="${item.productId?.imageUrls?.[0]}" alt="${item.productId.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
              <div>
                <p style="margin: 0; font-size: 16px; font-weight: bold;">${item.productId.name}</p>
                <p style="margin: 5px 0; font-size: 14px;"><strong>Quantity:</strong> ${item.quantity}</p>
              </div>
            </div>
          `
            )
            .join('')}

      <h3 style="border-bottom: 2px solid #c53038; padding-bottom: 5px; margin-top: 20px;">Order Summary</h3>
      <p><strong>Total Price:</strong> Rs. ${totalPrice} PKR</p>
      <p><strong>Shipping Address:</strong> ${customerAddress}</p>

      <p style="font-size: 14px; text-align: center; margin-top: 20px;">
        If you have any questions or think this was a mistake, please feel free to contact our support team.
      </p>
      <p style="text-align: center;">Best Regards,<br>Hommy Decor</p>
    </div>
  `;

    sendEmail({ to: customerEmail, subject: 'Your Order Has Been Cancelled', html });
};
