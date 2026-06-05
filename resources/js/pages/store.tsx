import { Head } from "@inertiajs/react";
import { useState } from "react";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";
import StoreCard from "@/components/store/store-card";
import StoreHeader from "@/components/store/store-header";
import StoreToolbar from "@/components/store/store-toolbar";

export default function Store() {
    const [category, setCategory] = useState('Semua');
    const [sort, setSort] = useState('Terbaru');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Head title="Toko" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <StoreHeader />
                <StoreToolbar
                    category={category}
                    setCategory={setCategory}
                    sort={sort}
                    setSort={setSort}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <StoreCard
                    category={category}
                    sort={sort}
                    searchQuery={searchQuery}
                />
                <HomeFooter />
            </div>
        </>
    )
}