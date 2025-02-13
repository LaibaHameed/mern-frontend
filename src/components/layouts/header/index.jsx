'use client';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { LuCircleUser } from 'react-icons/lu';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_LIST } from '@/utils/PATHS';
import Container from '../../shared/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="flex-center bg-secondary">
        <Container>
          {/* Top Bar */}
          <div className="md:flex items-center justify-between py-6 text-white text-sm hidden">
            <div className="flex-center gap-2 text-xs hover:text-primary animate font-semibold tracking-wider">
              <FiPhone size={20} />
              <span className="text-xs">Hotline: (602) 462 8889</span>
            </div>
            <p className="text-xs mx-4">Welcome To Botanical Store</p>
            <div className="flex-center justify-end gap-4 text-xs">
              <span>
                Currency: <strong>USD</strong>
              </span>
              <span>
                Languages: <strong>EN</strong>
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="flex-center">
        <Container>
          <div className="flex-center justify-between py-6 sm:margin-lg">
            {/* Logo */}
            <div>
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={120}
                height={120}
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex gap-10 text-lg text-secondary">
              {NAV_LIST.map((route) => (
                <Link
                  key={route.value}
                  href={route.path}
                  className="hover:text-primary hover:underline animate text-xs underline-offset-8 decoration-2 font-bold tracking-wider"
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            <div className="flex-center justify-between">
              {/* Mobile Menu Button */}
              <div
                className="lg:hidden flex-center sm:mx-6"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <FiX className="cursor-pointer text-secondary" size={25} />
                ) : (
                  <FiAlignJustify
                    className="cursor-pointer text-secondary"
                    size={25}
                  />
                )}
              </div>

              {/* Icons Section */}
              <div className="hidden sm:flex items-center sm:gap-4">
                <GoSearch
                  className="cursor-pointer hover:text-primary animate text-secondary"
                  size={20}
                />

                {/* Cart Icon with Badge */}
                <div className="relative">
                  <Link href={'/cart'}>
                    <BsCart3
                      className="cursor-pointer hover:text-primary animate text-secondary"
                      size={20}
                    />
                  </Link>

                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex-center cursor-pointer">
                      {cartItems}
                    </span>
                  )}
                </div>

                <LuCircleUser
                  className="cursor-pointer hover:text-primary animate text-secondary"
                  size={20}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'min-h-[180px] h-[180px]' : 'min-h-0 h-0'
          } text-secondary overflow-hidden py-2 my-4 absolute top-20 left-0 w-full bg-white bg-opacity-90 z-40 animate`}
      >
        <nav className="flex flex-col">
          {NAV_LIST.map((route) => (
            <Link
              key={route.value}
              href={route.path}
              className="hover:text-primary-hover hover:bg-black animate py-3 text-xs p-6 font-bold tracking-wider"
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
