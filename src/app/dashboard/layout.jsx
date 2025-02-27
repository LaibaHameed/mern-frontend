import Header from "@/components/dashboard/layouts/Header";

export default function DashboardLayout({ children }) {
    return <>
        <Header />
        {children}
    </>;
}
