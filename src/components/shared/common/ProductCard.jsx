import Image from 'next/image';
import Link from 'next/link';
import { BsCart3, BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.name}`}>
      <div className="relative group border border-gray-300 overflow-hidden w-full  mx-auto sm:max-w-none">
        {/* Image */}
        <Image
          src={product.image}
          width={400}
          height={370}
          alt={product.name}
          className="w-full h-auto"
        />

        {/* Hover Buttons */}
        <div className="absolute bottom-24 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 animate">
          <div className="flex-center py-3 gap-3">
            <button
              className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate rounded-l-full"
              aria-label="heart"
            >
              <FiHeart size={20} />
            </button>
            <button
              className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate"
              aria-label="cart"
            >
              <BsCart3 size={20} />
            </button>
            <button
              className="cursor-pointer px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary hover:text-white animate rounded-r-full"
              aria-label="eye"
            >
              <BsEye size={20} />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-gray-600">{product.name}</p>
          <h3 className="font-extrabold text-gray-700 font-serif">
            Rs. {product.price} PKR
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
