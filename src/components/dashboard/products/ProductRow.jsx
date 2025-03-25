'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDeleteProductMutation, useUpdateProductMutation } from "@/redux/slices/product/productsApi";
import ThemeButton from "@/components/shared/buttons/ThemeButton";
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";

const ProductRow = ({ product }) => {
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
    const [showModal, setShowModal] = useState(false);
    const [isOutOfStock, setIsOutOfStock] = useState(product.isOutOfStock);
    const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

    const toggleStockStatus = async () => {
        const updatedStockStatus = !isOutOfStock;
        setIsOutOfStock(updatedStockStatus);
        await updateProduct({ id: product._id, data: { isOutOfStock: updatedStockStatus } });
    };

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
                <td className="px-4 py-2 text-sm" >
                    <label className="flex-center cursor-pointer "> 
                        <input
                            type="checkbox"
                            checked={!isOutOfStock}
                            onChange={toggleStockStatus}
                            className="sr-only"
                        />
                        <div className={`w-12 h-6 bg-gray-300 rounded-full relative transition ${!isOutOfStock ? "bg-primary" : "bg-error"}`}>
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-0 transition-transform ${!isOutOfStock ? "translate-x-6" : "translate-x-0"}`}></div>
                        </div>
                    </label>
                </td>
                <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                        {/* Edit Button */}
                        <ThemeButton buttonText={<FaRegEdit size={20} />} styles={'text-white bg-primary hover:bg-primary-hover'} />
                        {/* Delete Button */}
                        <ThemeButton buttonText={<MdOutlineDeleteForever size={20} />} styles={'text-white bg-error hover:bg-error-hover'} handleClick={handleDeleteConfirm} />
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