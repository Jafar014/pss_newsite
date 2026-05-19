import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeHero from '@/components/home/home-hero';
import HomeNavbar from '@/components/home/home-navbar';
import HomeNews from '@/components/home/home-news';
import HomePlayers from '@/components/home/home-players';
import MatchCards from '@/components/home/match-cards';
import StoreCollection from '@/components/home/store-collection';

export default function HomePage({ players }: { players: any[] }) {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen w-full overflow-x-hidden bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <HomeHero />
                <MatchCards />
                <HomeNews />
                <StoreCollection />
                <HomePlayers players={players} />
                <HomeFooter />
            </div>
        </>
    );
}
