'use client';
import {FiAlignJustify, FiX} from 'react-icons/fi';
import {FiPhone} from 'react-icons/fi';
import {BsCart3} from 'react-icons/bs';

import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';
import {NAV_LIST, PUBLIC_ROUTES} from '@/utils/PATHS';
import Container from '../../shared/common/Container';
import {useSelector} from 'react-redux';
import {getCartItems} from '@/redux/slices/product/productsSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector(getCartItems);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-10 bg-white">
      {/* Main Header */}
      <div className="flex-center shadow-lg border-b-[1px] border-b-gray-200 sticky top-0">
        <Container>
          <div className="flex-center justify-between sm:margin-lg">
            {/* Logo */}
            <div>
              <Image
                src="/assets/logo/logo.png"
                alt="Logo"
                width={200}
                height={100}
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
              <div className="flex items-center gap-3 mx-2">
                {/* Cart Icon with Badge */}
                <div className="relative">
                  <Link href={PUBLIC_ROUTES.cart}>
                    <BsCart3
                      className="cursor-pointer hover:text-primary animate text-secondary"
                      size={20}
                    />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex-center cursor-pointer">
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'min-h-[180px] h-[180px]' : 'min-h-0 h-0'
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
