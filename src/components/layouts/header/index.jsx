'use client';
import {FiAlignJustify, FiX} from 'react-icons/fi';
import {FiPhone} from 'react-icons/fi';
import {BsCart3} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import {LuCircleUser} from 'react-icons/lu';

import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';
import {AUTH_ROUTES, NAV_LIST, PUBLIC_ROUTES} from '@/utils/PATHS';
import Container from '../../shared/common/Container';
import {useSelector} from 'react-redux';
import {getCartItems} from '@/redux/slices/product/productsSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector(getCartItems);

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
            <p className="text-xs mx-4">Welcome To HOMMY DECOR</p>
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
      <div className="flex-center shadow-md">
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
                <GoSearch
                  className="hidden sm:block cursor-pointer hover:text-primary animate text-secondary"
                  size={20}
                />

                <Link href={AUTH_ROUTES.login}>
                  <LuCircleUser
                    className="cursor-pointer hover:text-primary animate text-secondary"
                    size={20}
                  />
                </Link>

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
