import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeNavbar from '@/components/home/home-navbar';
import SubNewsContent from '@/components/news/sub-news-content';
import SubNewsHeader from '@/components/news/sub-news-header';
import SubNewsSuggestion from '@/components/news/sub-news-suggestion';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    thumbnail: string | null;
    category: string | null;
    author: string | null;
    status: string;
    views: number;
    published_at: string | null;
}

export default function Berita({ news, otherNews }: { news: NewsItem; otherNews: NewsItem[] }) {
    return (
        <>
            <Head title={news.title} />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <SubNewsHeader news={news} />
                <SubNewsContent news={news} />
                <SubNewsSuggestion otherNews={otherNews} />
                <HomeFooter />
            </div>
        </>
    );
}
