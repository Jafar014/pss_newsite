import HistorySection from "@/components/club/history-section"
import HomeFooter from "@/components/home/home-footer"
import HomeNavbar from "@/components/home/home-navbar"
import { Head } from "@inertiajs/react"

export default function History() {
    return(
        <>
            <Head title="Sejarah Klub"/>              
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <HistorySection />  
                <HomeFooter />
            </div>
        </>
    );
}