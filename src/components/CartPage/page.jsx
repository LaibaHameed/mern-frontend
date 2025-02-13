'use client'
import React, { useState } from 'react';
import Container from '../shared/Container';
import Image from 'next/image';
import { BsTrash3 } from 'react-icons/bs';
import { CART_ITEMS } from '@/constants/general';

const CartPage = () => {
    const [cartItems, setCartItems] = useState(CART_ITEMS);

    const updateQuantity = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    return (
        <div className='flex-center sm:m-12 mx-6'>
            <Container>
                <div className='overflow-x-auto'>
                    <table className='min-w-full'>
                        <thead>
                            <tr>
                                <td className='px-2 py-6 border-b border-gray-300 uppercase font-semibold text-left'>Product</td>
                                <td className='px-2 py-6 border-b border-gray-300 uppercase font-semibold text-left'>Price</td>
                                <td className='px-2 py-6 border-b border-gray-300 uppercase font-semibold text-left'>Quantity</td>
                                <td className='px-2 py-6 border-b border-gray-300 uppercase font-semibold text-left'>Total</td>
                                <td className='px-2 py-6 border-b border-gray-300 uppercase font-semibold text-left'></td>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className='border-b border-gray-300'>
                                    <td className='px-2 py-6 min-w-[300px] flex items-center gap-2 text-left cursor-pointer'>
                                        <Image src={item.image} alt={item.name} width={70} height={70} />
                                        <p className='text-gray-600 font-light hover:text-primary animate'>{item.name}</p>
                                    </td>
                                    <td className='px-2 py-6 text-left font-semibold tracking-wider'>${item.price}.00</td>
                                    <td className='px-2 py-6 text-left'>
                                        <div className='flex items-center border border-gray-300 w-fit'>
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className='py-2 border-r w-12 border-gray-300 cursor-pointer'>-</button>
                                            <span className='py-2 w-12 flex-center'>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className='py-2 border-l w-12 border-gray-300 cursor-pointer'>+</button>
                                        </div>
                                    </td>
                                    <td className='px-2 py-6 text-left font-semibold tracking-wider min-w-[100px]'>
                                        ${item.price * item.quantity}.00
                                    </td>
                                    <td className='px-2 py-6 text-left'>
                                        <button className='hover:text-red-700 font-extrabold cursor-pointer'>
                                            <BsTrash3 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='my-12'>
                    <h3 className='font-semibold mb-2 uppercase'>Add Note</h3>
                    <textarea
                        className='w-full p-3 border border-gray-300 focus:outline-none text-sm'
                        placeholder='Write your note here...'
                        rows={6}
                    ></textarea>
                </div>

                <div className='flex md:flex-row flex-col items-start justify-between gap-6'>
                    <div>
                        <h3 className='font-semibold mb-2 uppercase'>Promo code</h3>
                        <input type='text' className='p-3 max-w-xs border border-gray-300 focus:outline-none' />
                        <button className='px-12 py-3 my-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold uppercase block'>apply</button>
                    </div>
                    <div className='w-full flex flex-col justify-between md:items-center items-start gap-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold mb-2 uppercase pr-6'>Sub Total:</h3>
                            <h3 className='font-semibold mb-2 uppercase'>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
                        </div>
                        <button className='px-12 py-3 my-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold uppercase block'>Proceed to Checkout</button>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default CartPage;
