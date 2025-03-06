"use client";

import { useState } from "react";
import Header from "@/components/dashboard/layouts/Header";
import Sidebar from "@/components/dashboard/layouts/Sidebar";
import Container from "@/components/shared/common/Container";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        // <div className="flex-center">
        //     <Container>
                <div className="flex h-screen">
                    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

                    <main className="flex-1 md:p-6 bg-gray-100 overflow-auto">
                        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                        {children}
                    </main>
                </div>
        //     </Container>
        // </div>
    );
}
