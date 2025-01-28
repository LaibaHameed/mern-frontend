import { ICONS } from "@/constants/general";
import Badge from "./Badge";
import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="relative group border border-gray-300 overflow-hidden w-full max-w-[300px] mx-auto sm:max-w-none">
            {/* Badge */}
            {product.badge && <Badge text={product.badge} type={product.badge} />}

            {/* Image */}
            <Image
                src={product.image}
                width={400}
                height={370}
                alt={product.title}
                className="w-full h-auto"
            />

            {/* Hover Buttons */}
            <div className="absolute bottom-24 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center py-3 gap-3">
                    {ICONS.map((icon, index) => (
                        <button
                            key={icon.name}
                            className={`px-3 py-3 bg-white shadow-md text-gray-900 hover:bg-green-600 hover:text-white transition ${index===0 && "rounded-l-full"} ${index === Object.values(ICONS).length-1 && "rounded-r-full"} `}
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
                <h3 className="font-extrabold text-gray-700 font-serif">{product.price}.00 $</h3>
            </div>
        </div>
    );
};


export default ProductCard;
