import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminDashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="bg-[#f5f5f5] min-h-screen flex">
                <AdminSidebar />
            </div>
        </>
    );
}
