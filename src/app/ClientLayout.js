"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const hideLayout = pathname.startsWith("/dashboard");

    return (
        <>
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}
