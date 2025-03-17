'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDeleteProductMutation } from "@/redux/slices/product/productsApi";
import ThemeButton from "@/components/shared/buttons/ThemeButton";
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";

const ProductRow = ({ product }) => {
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
    const [showModal, setShowModal] = useState(false);

    const handleDeleteConfirm = () => {
        setShowModal(true);
    };

    const handleDelete = async () => {
        await deleteProduct(product._id);
        setShowModal(false);
    };

    return (
        <>
            <tr key={product._id} className="border-b border-gray-300">
                <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Image
                                src={product.imageUrls[0]}
                                alt={product.name}
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
                        <ThemeButton buttonText={<MdOutlineDeleteForever size={20} />} styles={'text-white bg-red-700 hover:bg-red-600'} handleClick={handleDeleteConfirm} />
                    </div>
                </td>
                <td className="px-4 py-2">
                    <Link href={`/products/${product._id}`} className="underline text-sm hover:text-primary transition-all">
                        View Product
                    </Link>
                </td>
            </tr>

            {/* Delete Confirmation Modal */}
            {showModal && (
                <ConfirmationModal
                    message={`Are you sure you want to delete ${product.name}?`}
                    onCancel={() => setShowModal(false)}
                    onConfirm={handleDelete}
                    confirmText="Delete"
                    cancelText="Cancel"
                    isLoading={isDeleting}
                />
            )}
        </>
    );
};

export default ProductRow;