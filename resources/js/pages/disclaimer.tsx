import { Head } from "@inertiajs/react";
import DisclaimerContent from "@/components/disclaimer/disclaimer-content";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";

export default function Disclaimer() {
    return (
        <>
            <Head title="Disclaimer" />
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <DisclaimerContent />
                <HomeFooter />
            </div>
        </>
    );
}