import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import JadwalPanel from "@/components/admin/jadwalPanel";

export default function AdminJadwal({ fixtures, clubs }: { fixtures: any; clubs: any }) {
    return (
        <>
            <Head title="Jadwal & Hasil"/>
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <JadwalPanel fixtures={fixtures} clubs={clubs}/>
                </div>
            </div>
        </>
    );
}
