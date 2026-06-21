import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import PlayerPanel from "@/components/admin/playerPanel";

export default function AdminPlayer({ pemain }: { pemain: any }) {
    return (
        <>
            <Head title="Pemain"/>
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <PlayerPanel pemain={pemain}/>
                </div>
            </div>
        </>
    );
}