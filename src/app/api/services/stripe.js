import {Stripe} from 'stripe';
import {asyncTryCatch} from '@/utils/tryCatchUtils';
import {PUBLIC_ROUTES} from '@/utils/PATHS';
0;
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY, {
  apiVersion: '2023-10-16',
});

const successUrl = `${process.env.NEXT_PUBLIC_APP_URL}/${PUBLIC_ROUTES.paymentSuccessful}`;
const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL}`;

export const StripeServices = {
  createCheckoutPaymentSession: async ({line_items, metadata}) => {
    const {
      success,
      error,
      response: session,
    } = await asyncTryCatch(async () =>
      stripe.checkout.sessions.create({
        line_items,
        metadata,
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
      })
    );
    return {success, session, error};
  },
  webhookEvent: ({body, signature}) => {
    const secret = process.env.NEXT_PUBLIC_WEBHOOK_KEY;
    return stripe.webhooks.constructEvent(body, signature, secret);
  },
};
