import React from 'react'
import Container from '../shared/Container'
import { GALLERY_ITEMS } from "@/constants/general";
import Image from 'next/image';

const Gallery = () => {
    return (
        <div className='flex items-center justify-center'>
            <Container>
                <div>
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
                                        width={500}
                                        height={800}
                                        className='img'
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Gallery