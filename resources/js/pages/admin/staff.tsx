import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import StaffPanel from "@/components/admin/staffPanel";

export default function AdminStaff({ staff }: { staff: any }) {
    return (
        <>
            <Head title="Staff"/>
            <div className="flex">
                <AdminSidebar />
                <div className="p-6 bg-[#f5f5f5] flex-1">
                    <StaffPanel staff={staff}/>
                </div>
            </div>
        </>
    );
}