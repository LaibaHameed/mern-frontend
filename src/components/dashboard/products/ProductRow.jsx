'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDeleteProductMutation } from "@/redux/slices/product/productsApi";
import { DASHBOARD_ROUTES } from "@/utils/PATHS";
import ThemeButton from "@/components/shared/buttons/ThemeButton";
import ConfirmationModal from "@/components/shared/common/ConfirmationModal";
import { useRouter } from "next/navigation";

const ProductRow = ({ product }) => {
    const productId = product._id;
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
    const [showModal, setShowModal] = useState(false);
    const router = useRouter()

    const handleDeleteConfirm = () => {
        setShowModal(true);
    };

    const handleDelete = async () => {
        await deleteProduct(productId);
        setShowModal(false);
    };
    const handleEdit = () => router.push(DASHBOARD_ROUTES.products.editProduct({ productId }));

    return (
        <>
            <tr key={productId} className="border-b border-gray-300">
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
                            <div className="text-sm opacity-70">RS. {product.price}</div>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2 text-sm">{product.code}</td>
                <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                        {/* Edit Button */}
                        <div className="relative group">
                            <ThemeButton
                                buttonText={<FaRegEdit size={20} />}
                                styles={'text-white bg-primary hover:bg-primary-hover'}
                                handleClick={handleEdit}
                            />
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 animate">
                                Update
                            </span>
                        </div>

                        {/* Delete Button */}
                        <div className="relative group">
                            <ThemeButton
                                buttonText={<MdOutlineDeleteForever size={20} />}
                                styles={'text-white bg-error hover:bg-error-hover'}
                                handleClick={handleDeleteConfirm}
                            />
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 animate">
                                Delete
                            </span>
                        </div>

                    </div>
                </td>
                <td className="px-4 py-2">
                    <Link
                        href={`/products/${product._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-sm hover:text-primary transition-all">
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