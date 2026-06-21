import NewsPanel from "@/components/admin/newsPanel";
import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminNews({ news }: { news: any }) {
    return (
        <>
            <Head title="Berita - Admin Panel" />
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <NewsPanel news={news} />
                </div>
            </div>
        </>
    );
}