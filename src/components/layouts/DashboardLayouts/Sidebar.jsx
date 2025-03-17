"use client";

import ThemeButton from "@/components/shared/buttons/ThemeButton";
import { DASHBOARD_TABS } from "@/utils/PATHS";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slices/user/userSlice";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();
    const dispatch = useDispatch();

    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-gray-100 opacity-30  md:hidden z-40" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 h-screen w-64 bg-secondary text-white flex flex-col z-50 
                animate ${
                    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div className="text-2xl font-semibold font-serif w-full text-center border-b border-gray-600 py-8 relative">
                    Admin Panel
                    <button
                        className="absolute top-3 right-4 text-white md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-4">
                    <ul>
                        {DASHBOARD_TABS.map((item) => (
                            <li key={item.value} className="my-2">
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                                        pathname === item.path ? "bg-primary" : "hover:bg-primary-hover"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon} {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 mt-auto">
                    <ThemeButton
                        buttonText="Logout"
                        handleClick={() => dispatch(logoutUser())}
                        styles="bg-error hover:bg-error-hover w-full"
                    />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
