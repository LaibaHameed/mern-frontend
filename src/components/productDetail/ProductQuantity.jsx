import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { ROOT_ROUTE } from "@/utils/PATHS";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0 space-y-5 my-10">
            <div className="flex items-center">
                <button
                    className="rounded-l-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer"
                    onClick={decreaseQuantity}
                >
                    <HiOutlineMinus />
                    
                </button>
                <p className="py-3 px-10 border text border-primary">{quantity}</p>
                <button
                    className="rounded-r-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer"
                    onClick={increaseQuantity}
                >
                    <IoMdAdd />
                </button>
            </div>
            <div className="flex flex-wrap gap-4 text-center">
                <Link
                    href={ROOT_ROUTE}
                    className="rounded-full bg-primary px-7 py-3 tracking-wider text-white shadow hover:bg-green-400 focus:outline-none sm:w-auto flex-center gap-2 animate"
                >
                    Add To Cart <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default ProductQuantity;
