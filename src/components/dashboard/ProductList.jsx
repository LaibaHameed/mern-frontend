import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { useGetProductsQuery } from "@/redux/slices/product/productsApi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCloudOfflineOutline } from "react-icons/io5";

const ProductList = () => {
    const { data, isLoading } = useGetProductsQuery();

    const products = data?.body?.products ?? [];

    if (isLoading) return <span className="loading loading-spinner loading-xl"></span>;

    return (
        <div>
            {products.length === 0 ? (
                <p className="py-10 flex-center gap-2"> <IoCloudOfflineOutline /> No products available....</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border-b border-gray-500">

                                <th>Product</th>
                                <th className="hidden md:flex">Product Code</th>
                                <th className="hidden md:flex">Brand</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {products?.map((product) => (
                                <tr key={product._id} className="border-b border-gray-500">
                                    <td>
                                        <div className="flex items-center justify-start gap-3">
                                            <div className="avatar">
                                                <div className="mask">
                                                    <Image
                                                        src={product.imageUrls[0]}
                                                        alt={product.name}
                                                        height={50}
                                                        width={50} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">$ {product.price}.00</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden md:flex">
                                        {product.code}
                                    </td>
                                    <td className="hidden md:flex">
                                        {product.brand}
                                    </td>
                                    <td>
                                        <div className="flex-center gap-3">
                                            <span className="cursor-pointer hover:text-primary animate">
                                                <FaRegEdit size={20} />
                                            </span>
                                            <span className="cursor-pointer hover:text-red-700 animate">
                                                <MdOutlineDeleteForever size={25} />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <Link href={'/'} className="underline text-sm hover:text-primary animate">view Product</Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}

export default ProductList