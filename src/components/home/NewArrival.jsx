import { NEW_ARRIVAL } from "@/constants/general";
import Image from "next/image";
import ProductCard from "../reuseableComponents/ProductCard";

const NewArrival = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold font-serif my-4 tracking-tighter">New Arrival</h1>
            <Image src="/assets/HeadingImg.png" width={350} height={100} alt="Heading" />
            <p className="m-5 text-gray-600">
                There are many variations of passages of lorem ipsum available
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-24 px-12 my-6">
                {NEW_ARRIVAL.map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))}
            </div>
        </div>
    );
};

export default NewArrival;
