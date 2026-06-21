import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminDashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-screen overflow-hidden bg-[#f5f5f5]">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6">
                    <h1 className="text-[#1c1c1c] text-2xl font-semibold">Dashboard</h1>
                </div>
            </div>
        </>
    );
}
