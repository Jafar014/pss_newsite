import HistoryPanel from "@/components/admin/historyPanel";
import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminHistory({ histories }: { histories: any }) {
    return (
        <>
            <Head title="Sejarah - Admin Panel" />
            <div className="flex">
                <AdminSidebar />
                <div className="p-6 bg-[#f5f5f5] flex-1">
                    <HistoryPanel histories={histories} />
                </div>
            </div>
        </>
    );
}
