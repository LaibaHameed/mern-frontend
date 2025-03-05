'use client';
import React, {useState} from 'react';
import Container from '../shared/common/Container';
import {CART_ITEMS} from '@/constants/general';
import CartTable from './CartTable';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(CART_ITEMS);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {...item, quantity: Math.max(1, item.quantity + delta)}
          : item
      )
    );
  };

  return (
    <div className="flex-center sm:m-12 mx-6">
      <Container>
        <CartTable cartItems={cartItems} updateQuantity={updateQuantity} />

        <div className="my-12">
          <h3 className="font-semibold mb-2 uppercase">Add Note</h3>
          <textarea
            className="w-full p-3 border border-gray-300 focus:outline-none text-sm"
            placeholder="Write your note here..."
            rows={6}
          ></textarea>
        </div>

        <div className="flex md:flex-row flex-col items-start justify-between gap-6">
          <div>
            <h3 className="font-semibold mb-2 uppercase">Promo code</h3>
            <input
              type="text"
              className="p-3 max-w-xs border border-gray-300 focus:outline-none"
            />
            <button className="px-12 py-3 my-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold uppercase block">
              apply
            </button>
          </div>
          <div className="w-full flex flex-col justify-between md:items-center items-start gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold mb-2 uppercase pr-6">Sub Total:</h3>
              <h3 className="font-semibold mb-2 uppercase">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </h3>
            </div>
            <button className="px-12 py-3 my-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold uppercase block">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
