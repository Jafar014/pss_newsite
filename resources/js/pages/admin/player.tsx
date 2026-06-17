import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import PlayerPanel from "@/components/admin/playerPanel";

export default function AdminPlayer({ pemain }: { pemain: any }) {
    return (
        <>
            <Head title="Pemain"/>
            <div className="flex">
                <AdminSidebar />
                <div className="p-6 bg-[#f5f5f5] flex-1">
                    <PlayerPanel pemain={pemain}/>
                </div>
            </div>
        </>
    );
}