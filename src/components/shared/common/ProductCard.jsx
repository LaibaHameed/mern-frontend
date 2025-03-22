'use client';

import Image from 'next/image';
import { BsCartDash, BsCartPlus, BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import {
  getCartItems,
  actions as productActions,
} from '@/redux/slices/product/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { PUBLIC_ROUTES } from '@/utils/PATHS';
import { showToast } from '@/utils/toasts';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const router = useRouter();

  return (
    <div className="relative group border border-gray-300 overflow-hidden w-full  mx-auto sm:max-w-none">
      {/* Image */}
      <div className="relative w-full h-[200px] sm:h-[250px]">
        <Image
          src={product.imageUrls[0]}
          // width={200}
          // height={270}
          alt={product.name}
          // className="w-full h-[370px] object-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Hover Buttons */}
      <div className="absolute bottom-24 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 animate">
        <div className="flex-center py-3 gap-3">
          <button
            onClick={() =>
              showToast({
                type: 'info',
                message: 'This feature will be added in upcoming updates',
              })
            }
            className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate rounded-l-full"
            aria-label="heart"
          >
            <FiHeart size={20} />
          </button>

          {!!cartItems.find((item) => item._id === product._id) ? (
            <button
              onClick={() =>
                dispatch(productActions.deleteFromCart(product._id))
              }
              className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-error-hover hover:text-white animate"
              aria-label="cart"
            >
              <BsCartDash size={20} />
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(productActions.addToCart({ ...product, quantity: 1 }))
              }
              className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate"
              aria-label="cart"
            >
              <BsCartPlus size={20} />
            </button>
          )}

          <button
            className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate rounded-r-full"
            aria-label="eye"
            onClick={() =>
              router.push(
                PUBLIC_ROUTES.products.single({ productId: product._id })
              )
            }
          >
            <BsEye size={20} />
          </button>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center py-6">
        <p className="sm:text-sm text-xs uppercase text-secondary">{product.name}</p>
        <h3 className=" text-primary font-serif sm:text-sm text-xs">
          Rs. {product.price}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
