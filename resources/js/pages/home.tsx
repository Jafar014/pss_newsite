import { lazy, Suspense } from 'react';
import { Head } from '@inertiajs/react';
import HomeCollection from '@/components/home/home-collection';
import HomeHero from '@/components/home/home-hero';
import HomeNavbar from '@/components/home/home-navbar';
import HomeNews from '@/components/home/home-news';
import HomeVideo from '@/components/home/home-video';
import MatchCards from '@/components/home/match-cards';

const HomeFooter = lazy(() => import('@/components/home/home-footer'));

function FooterSkeleton() {
    return (
        <footer className="w-full bg-black">
            <div className="h-64 animate-pulse bg-black/50" />
        </footer>
    );
}

export default function HomePage({
    lastMatch,
    upcomingMatch,
    standings,
}: {
    lastMatch?: any;
    upcomingMatch?: any;
    standings?: any[];
}) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5]">
                <HomeNavbar transparent />
                <HomeHero />
                <HomeNews />
                <MatchCards
                    lastMatch={lastMatch}
                    upcomingMatch={upcomingMatch}
                    standings={standings}
                />
                <HomeCollection />
                {/* <StoreCollection /> */}
                <HomeVideo />
                <Suspense fallback={<FooterSkeleton />}>
                    <HomeFooter />
                </Suspense>
            </div>
        </>
    );
}
