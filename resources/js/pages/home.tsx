import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeHero from '@/components/home/home-hero';
import HomeNavbar from '@/components/home/home-navbar';
import HomePlayers from '@/components/home/home-players';
import MatchCards from '@/components/home/match-cards';
import StoreCollection from '@/components/home/store-collection';
import HomeNews from '@/components/home/home-news';

export default function HomePage() {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen w-full bg-white">
                <HomeNavbar />
                <HomeHero />
                <MatchCards />
                <HomeNews />
                <StoreCollection />
                <HomePlayers />
                <HomeFooter />
            </div>
        </>
    );
}
