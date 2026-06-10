import { Head } from "@inertiajs/react";

export default function AdminDashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-100">
                <div className="p-8">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
            </div>
        </>
    );
}
