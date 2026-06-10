import { lazy, Suspense } from 'react';
import { Head } from '@inertiajs/react';
import HomeCollection from '@/components/home/home-collection';
import HomeHero from '@/components/home/home-hero';
import HomeNavbar from '@/components/home/home-navbar';
import HomeNews from '@/components/home/home-news';
import MatchCards from '@/components/home/match-cards';

const HomePlayers = lazy(() => import('@/components/home/home-players'));
const HomeFooter = lazy(() => import('@/components/home/home-footer'));

function PlayersSkeleton() {
    return (
        <section className="w-full bg-[#f5f5f5]">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]" />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <div className="h-12 md:h-16 lg:h-20 w-64 mx-auto bg-[#f5f5f5]/20 rounded animate-pulse" />
                </div>
            </div>
            <div className="max-w-full px-4 pb-8 mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[3/4] bg-gray-200 rounded animate-pulse" />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FooterSkeleton() {
    return (
        <footer className="w-full bg-black">
            <div className="h-64 animate-pulse bg-black/50" />
        </footer>
    );
}

export default function HomePage({
    players,
    lastMatch,
    upcomingMatch,
    standings,
}: {
    players?: any[];
    lastMatch?: any;
    upcomingMatch?: any;
    standings?: any[];
}) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <HomeHero />
                <MatchCards
                    lastMatch={lastMatch}
                    upcomingMatch={upcomingMatch}
                    standings={standings}
                />
                <HomeNews />
                <HomeCollection />
                {/* <StoreCollection /> */}
                <Suspense fallback={<PlayersSkeleton />}>
                    <HomePlayers players={players} />
                </Suspense>
                <Suspense fallback={<FooterSkeleton />}>
                    <HomeFooter />
                </Suspense>
            </div>
        </>
    );
}
