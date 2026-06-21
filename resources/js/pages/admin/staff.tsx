import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import StaffPanel from "@/components/admin/staffPanel";

export default function AdminStaff({ staff }: { staff: any }) {
    return (
        <>
            <Head title="Staff"/>
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <StaffPanel staff={staff}/>
                </div>
            </div>
        </>
    );
}