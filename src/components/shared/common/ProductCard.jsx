import { ICONS } from '@/constants/general';
import Image from 'next/image';
import Link from 'next/link';

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
            {ICONS.map((icon, index) => (
              <button
                key={icon.name}
                className={`px-3 py-3 bg-white shadow-md text-secondary hover:bg-primary-hover hover:text-white animate ${index === 0 && 'rounded-l-full'
                  } ${index === Object.values(ICONS).length - 1 && 'rounded-r-full'}`}
                aria-label={icon.name}
              >
                {icon.icon}
              </button>
            ))}
          </div>
        </div>


        {/* Text Content */}
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-gray-600">{product.title}</p>
          <h3 className="font-extrabold text-gray-700 font-serif">
            {product.price}.00 $
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
