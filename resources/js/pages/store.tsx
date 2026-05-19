import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";
import StoreCard from "@/components/store/store-card";
import StoreHeader from "@/components/store/store-header";
import StoreToolbar from "@/components/store/store-toolbar";
import { Head } from "@inertiajs/react";

export default function Store() {
    return (
        <>
            <Head title="Toko" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <StoreHeader />
                <StoreToolbar />
                <StoreCard />
                <HomeFooter />
            </div>
        </>
    )
}