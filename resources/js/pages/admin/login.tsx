import { Head } from "@inertiajs/react";
import Login from '@/components/admin/login';

export default function AdminLogin() {
    return <>
        <Head title="Login Dashboard" />
        <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
            <Login />
        </div>
    </>;
}
