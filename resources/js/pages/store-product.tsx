import { Head } from "@inertiajs/react";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";
import StoreProductDetail from "@/components/store/store-product-detail";

export default function StoreProduct({ slug }: { slug: string }) {
    return (
        <>
            <Head title="Detail Produk" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <StoreProductDetail slug={slug} />
                <HomeFooter />
            </div>
        </>
    );
}
