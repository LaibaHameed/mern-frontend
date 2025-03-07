import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import ThemeButton from "../shared/buttons/ThemeButton";


const ProductRow = ({ product }) => {
    return (
        <>
            <tr key={product._id} className="border-b border-gray-300">
                <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Image
                                src={product.imageUrls[0]}
                                alt={product.name}
                                className="rounded-md"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div>
                            <div className="font-semibold text-sm max-w-48">{product.name}</div>
                            <div className="text-sm opacity-70">$ {product.price}.00</div>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2 text-sm">{product.code}</td>
                <td className="px-4 py-2 text-sm">
                    {product.availableQty > 0 ? <p className="text-primary">In Stock</p> : <p className="text-red-700">Out of Stock</p>}
                </td>
                <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                        {/* Edit Button */}
                        <ThemeButton buttonText={<FaRegEdit size={20} />} styles={'text-white bg-primary hover:bg-primary-hover'} />
                        {/* Delete Button */}
                        <ThemeButton buttonText={<MdOutlineDeleteForever size={20} />} styles={'text-white bg-red-700 hover:bg-red-600'} />
                    </div>
                </td>
                <td className="px-4 py-2">
                    <Link href={'/'} className="underline text-sm hover:text-primary transition-all">
                        View Product
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default ProductRow