import {Stripe} from 'stripe';
import {asyncTryCatch} from '@/utils/tryCatchUtils';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY, {
  apiVersion: '2023-10-16',
});

const successUrl = 'http://localhost:3000';
const cancelUrl = 'http://localhost:3000';

export const StripeServices = {
  createCheckoutPaymentSession: async ({line_items}) => {
    const {
      success,
      error,
      response: session,
    } = await asyncTryCatch(async () =>
      stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
      })
    );
    return {success, session, error};
  },
};
