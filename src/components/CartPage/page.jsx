'use client';
import { useState } from 'react';
import Container from '../shared/common/Container';
import { CART_ITEMS } from '@/constants/general';
import CartTable from './CartTable';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(CART_ITEMS);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="flex-center sm:m-12 mx-6">
      <Container>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">

          <div className="xl:col-span-3 md:grid-cols-2 grid-cols-1">
            <CartTable cartItems={cartItems} updateQuantity={updateQuantity} />
          </div>

          <div className="col-span-1 w-full px-6 rounded shadow-md">
            <h2 className="font-semibold mb-4 uppercase py-6 border-b border-gray-300">Order Summary</h2>

            {/* Subtotal */}
            <div className="flex justify-between font-medium mb-6">
              <span>Subtotal:</span>
              <span>
                ${cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            {/* Coupon Code Input */}
            <div className="mb-6">
              <input
                type="text"
                className="p-2 w-full border border-gray-300 focus:outline-none"
                placeholder='Enter Promo code'
              />
            </div>

            {/* Update Cart Button */}
            <button className="w-full p-3 mb-3 mt-6 text-sm bg-primary hover:bg-primary-hover text-white font-semibold uppercase block animate cursor-pointer">
                Update Cart
              </button>

            {/* Checkout Button */}
            <button className="w-full p-3 mb-6 text-sm bg-secondary hover:bg-primary-hover text-white font-semibold uppercase block animate cursor-pointer">
                Proceed to Checkout
              </button>
          </div>
          
        </div>   
      </Container>
    </div>
  );
};

export default CartPage;
