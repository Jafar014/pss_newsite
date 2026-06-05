import { Head } from "@inertiajs/react";
import GalleryListContent from "@/components/gallery/gallery-list-content";
import GalleryListHeader from "@/components/gallery/gallery-list-header";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";

export default function Gallery() {
    return (
        <>
            <Head title="Galeri"/>
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <GalleryListHeader />  
                <GalleryListContent/>
                <HomeFooter />
            </div>
        </>
    );
}