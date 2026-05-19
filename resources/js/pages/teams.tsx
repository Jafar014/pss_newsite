import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeNavbar from '@/components/home/home-navbar';
import TeamsPlayer from '@/components/teams/teams-player';

interface Player {
    id: number;
    name: string;
    position: string | null;
    jersey_number: number | null;
    photo: string | null;
    age: number | null;
    height: string | null;
    weight: string | null;
    birthdate: string | null;
    goals: number;
    assists: number;
}

interface Staff {
    id: number;
    name: string;
    photo: string | null;
}

interface Team {
    id: number;
    name: string;
    code: string | null;
    logo: string | null;
    country: string | null;
}

interface Props {
    team: Team;
    players: Player[];
    staff: Staff[];
}

export default function Teams({ team, players, staff }: Props) {
    return (
        <>
            <Head title="Skuad" />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <TeamsPlayer team={team} players={players} staff={staff} />
                <HomeFooter />
            </div>
        </>
    );
}
