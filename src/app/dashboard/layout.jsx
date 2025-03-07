"use client";

import { useState } from "react";
import Header from "@/components/layouts/DashboardLayouts/Header";
import Sidebar from "@/components/layouts/DashboardLayouts/Sidebar";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <main className="flex-1 md:p-6 bg-gray-100 overflow-auto">
                <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                {children}
            </main>
        </div>
    );
}
