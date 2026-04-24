import { Head } from '@inertiajs/react';
import HomeNavbar from '@/components/home/home-navbar';
import HomeHero from '@/components/home/home-hero';
import MatchCards from '@/components/home/match-cards';
import StoreCollection from '@/components/home/store-collection';
import HomeContent from '@/components/home/home-content';
import HomeFooter from '@/components/home/home-footer';

export default function HomePage() {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen w-full bg-white">
                <HomeNavbar />
                <HomeHero
                    videoId="_oBRlFb3qGM"
                    dark
                />
                <MatchCards dark />
                <StoreCollection dark />
                <HomeFooter dark />
            </div>
        </>
    );
}