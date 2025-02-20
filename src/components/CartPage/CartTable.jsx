'use client'
import React from 'react';
import Image from 'next/image';
import { BsTrash3 } from 'react-icons/bs';

const CartTable = ({ cartItems, updateQuantity }) => {
    return (
        <>
            <div className='overflow-x-auto hidden md:block'>
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
            <div className='md:hidden'>
                <table className='min-w-full text-left'>
                    <thead>
                        <tr className='w-full flex justify-between border-b border-gray-300'>
                            <td className='px-2 py-6 uppercase font-semibold text-sm text-left'>Product</td>
                            <td className='px-2 py-6 uppercase font-semibold text-sm min-w-[100px] text-right'>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className='border-b border-gray-300  w-full flex justify-between'>
                                <td className='px-2 py-6 flex items-start gap-6 cursor-pointer text-left'>
                                    <Image src={item.image} alt={item.name} width={100} height={100} />
                                    <div>
                                        <p className='text-gray-600 font-light hover:text-primary text-xs animate'>{item.name} {item.name}</p>
                                        <h6 className='py-2 text-xs'>${item.price}.00</h6>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center border border-gray-300 w-fit'>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className='py-1 w-6 border-r border-gray-300 cursor-pointer'>-</button>
                                                <span className='py-1 w-6 flex items-center justify-center text-xs'>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className='py-1 w-6 border-l border-gray-300 cursor-pointer'>+</button>
                                            </div>
                                            <button className='hover:text-red-700 font-extrabold cursor-pointer'>
                                                <BsTrash3 />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-2 py-6 text-xs font-semibold tracking-wider min-w-[100px] text-right'>
                                    ${item.price * item.quantity}.00
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CartTable;
