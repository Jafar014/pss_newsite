import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import StandingPanel from "@/components/admin/klasemenPanel";

export default function AdminStanding({ klasemen, clubs }: { klasemen: any; clubs: any }) {
    return (
        <>
            <Head title="Klasemen" />
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="p-6 bg-[#f5f5f5] flex-1 flex flex-col overflow-hidden">
                    <StandingPanel klasemen={klasemen} clubs={clubs} />
                </div>
            </div>
        </>
    );
}
