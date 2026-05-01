import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeNavbar from '@/components/home/home-navbar';
import NewsContent from '@/components/news/news-content';

export default function NewsPage() {
    return (
        <>
            <Head title="Berita" />
            <div className="min-h-screen w-full bg-[#1a1a1a]">
                <HomeNavbar />
                <NewsContent />
                <HomeFooter dark />
            </div>
        </>
    );
}
