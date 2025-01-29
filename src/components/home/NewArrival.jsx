"use client";
import { GALLERY_ITEMS, NEW_ARRIVAL } from "@/constants/general";
import Image from "next/image";
import ProductCard from "../reuseableComponents/ProductCard";

const NewArrival = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold font-serif my-4 tracking-tighter">New Arrival</h1>
                <Image src="/assets/HeadingImg.png" width={350} height={100} alt="Heading" />
                <p className="m-5 text-gray-600 text-center">
                    There are many variations of passages of lorem ipsum available
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-24 sm:px-12 my-6">
                    {NEW_ARRIVAL.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </div>
            <div className="gallery">
                <div className="grid-container">
                    {GALLERY_ITEMS.map((item) => (
                        <div key={item.id} className={`image-wrapper ${item.class}`}>
                            <div className="image-title ">
                                <h1 className="capitalize lg:text-xl md:text-lg  font-serif font-semibold text-gray-800 cursor-pointer hover:text-green-600 transition-all duration-300 ease-in-out">{item.title}</h1>
                                <p className="text-gray-500">( {item.items} item)</p>
                            </div>
                            <Image
                                src={item.image}
                                alt="Gallery Image"
                                layout="responsive"
                                width={500}
                                height={800}
                            />
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default NewArrival;
