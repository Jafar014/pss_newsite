import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeNavbar from '@/components/home/home-navbar';
import SubNewsContent from '@/components/news/sub-news-content';
import SubNewsHeader from '@/components/news/sub-news-header';
import SubNewsSuggestion from '@/components/news/sub-news-suggestion';

export default function Berita({ id }: { id: string }) {
    return (
        <>
            <Head title="Berita" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <SubNewsHeader/>
                <SubNewsContent/>
                <SubNewsSuggestion/>
                <HomeFooter />
            </div>
        </>
    );
}
