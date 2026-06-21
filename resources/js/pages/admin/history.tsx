import HistoryPanel from "@/components/admin/historyPanel";
import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminHistory({ histories }: { histories: any }) {
    return (
        <>
            <Head title="Sejarah - Admin Panel" />
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <HistoryPanel histories={histories} />
                </div>
            </div>
        </>
    );
}
