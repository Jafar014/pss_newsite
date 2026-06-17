import NewsPanel from "@/components/admin/newsPanel";
import AdminSidebar from "@/components/admin/sidebar";
import { Head } from "@inertiajs/react";

export default function AdminNews({ news }: { news: any }) {
    return (
        <>
            <Head title="Berita - Admin Panel" />
            <div className="flex">
                <AdminSidebar />
                <div className="p-6 bg-[#f5f5f5] flex-1">
                    <NewsPanel news={news} />
                </div>
            </div>
        </>
    );
}