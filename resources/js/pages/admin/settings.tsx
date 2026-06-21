import { Head } from "@inertiajs/react";
import AdminSidebar from "@/components/admin/sidebar";
import SettingsPanel from "@/components/admin/settingsPanel";

export default function AdminSettings() {
    return (
        <>
            <Head title="Settings"/>
            <div className="flex h-screen overflow-hidden">
                <AdminSidebar />
                <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
                    <SettingsPanel/>
                </div>
            </div>
        </>
    );
}
