import { Head } from "@inertiajs/react";
import FixtureSchedule from "@/components/competition/fixtures-schedule";
import HomeFooter from "@/components/home/home-footer";
import HomeNavbar from "@/components/home/home-navbar";

interface CompetitionProps {
    fixtures: any[];
    klasemen: any[];
    club: any[];
}

export default function Competition({ fixtures, klasemen, club }: CompetitionProps) {
    return(
        <>
            <Head title="Jadwal dan Hasil"/>
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar/>
                <FixtureSchedule fixtures={fixtures} klasemen={klasemen} club={club} />
            </div>
            <HomeFooter/>
        </>
    );
}