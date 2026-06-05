import { Head } from "@inertiajs/react";
import SubGalleryContent from "@/components/gallery/sub-gallery-content";
import SubGalleryHeader from "@/components/gallery/sub-gallery-header";
import SubGallerySuggestion from "@/components/gallery/sub-gallery-suggestion";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";

export default function ContentGallery() {
    return (
        <>
            <Head title="Matchday x" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <SubGalleryHeader/>
                <div className="w-full grid grid-cols-4">
                    <div className="col-span-3">
                        <SubGalleryContent/>
                    </div>
                    <div className="grid">
                        <SubGallerySuggestion/>
                    </div>
                </div>
                <HomeFooter />
            </div>
        </>
    );
}