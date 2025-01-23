"use client";
import { FiAlignJustify } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { LuCircleUser } from "react-icons/lu";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from "next/link";
import { NAV_LIST } from "@/utils/PATHS";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Top Bar */}
      <div className="sm:flex items-center justify-between md:px-20 px-10 py-6 bg-gray-900 text-white text-sm hidden">
        <div className="flex items-center gap-2 text-xs mx-4 hover:text-green-700 font-semibold tracking-wider">
          <FiPhone size={20} />
          <span className='text-xs'>Hotline: (602) 462 8889</span>
        </div>
        <p className='text-xs mx-4'>Welcome To Botanical Store</p>
        <div className="flex items-center gap-4 text-xs mx-4">
          <span>Currency: <strong>USD</strong></span>
          <span>Languages: <strong>EN</strong></span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between md:px-20 px-10 py-6  border-b border-gray-200">
        {/* Logo */}
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={120} height={120} />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-10 text-lg text-gray-700">
          {NAV_LIST.map((route) => (
            <Link
              key={route.value}
              href={route.path}
              className="hover:text-green-700 text-xs underline-offset-8 decoration-2 hover:underline font-bold text-black tracking-wider"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className='flex justify-between'>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center sm:mx-6" onClick={toggleMenu}>
            <FiAlignJustify className="cursor-pointer text-gray-600" size={25} />
          </div>

          {/* Icons Section */}
          <div className="hidden sm:flex items-center sm:gap-4">
            <GoSearch className="cursor-pointer hover:text-green-700 text-gray-600" size={20} />

            {/* Cart Icon with Badge */}
            <div className="relative">
              <BsCart3 className="cursor-pointer hover:text-green-700 text-gray-600" size={20} />

              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center cursor-pointer">
                  {cartItems}
                </span>
              )}
            </div>

            <LuCircleUser className="cursor-pointer hover:text-green-700 text-gray-600" size={20} />
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} text-gray-700 my-4`}>
        <nav className="flex flex-col">
          {NAV_LIST.map((route) => (
            <Link
              key={route.value}
              href={route.path}
              className="hover:text-green-600 hover:bg-black py-3 text-xs p-4 font-bold tracking-wider"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
