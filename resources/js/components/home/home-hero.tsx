import { useState } from 'react';
import YoutubePlayer, { YoutubeThumbnail } from '@/components/home/youtube-player';
import NewsSection from '@/components/home/news-section';

interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt?: string;
}

interface HomeHeroProps {
    videoId: string;
    dark?: boolean;
    news?: NewsItem[];
}

export default function HomeHero({
    videoId,
    dark = false,
    news = [],
}: HomeHeroProps) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <section className={`relative w-full ${dark ? 'bg-[#1C1C1C]' : 'bg-white'}`}>
            <div className="mx-auto w-full">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-4/6">
                        {showPlayer ? (
                            <YoutubePlayer videoId={videoId} autoplay />
                        ) : (
                            <YoutubeThumbnail
                                videoId={videoId}
                                onClick={() => setShowPlayer(true)}
                            />
                        )}
                    </div>
                    <NewsSection news={news} dark={dark} />
                </div>
            </div>
        </section>
    );
}