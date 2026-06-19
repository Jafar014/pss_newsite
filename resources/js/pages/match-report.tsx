import { Head } from '@inertiajs/react';
import HomeFooter from '@/components/home/home-footer';
import HomeNavbar from '@/components/home/home-navbar';
import MatchReportEvents from '@/components/match/match-report-events';
import MatchReportFormation from '@/components/match/match-report-formation';
import MatchReportHeader from '@/components/match/match-report-header';
import MatchReportStats from '@/components/match/match-report-stats';

interface MatchReportProps {
    fixture: string;
}

export default function MatchReport({ fixture }: MatchReportProps) {
    return (
        <>
            <Head title={`Match Report Pekan ${fixture}`} />
            <div className="min-h-screen w-full bg-[#f5f5f5] pt-16 md:pt-20 lg:pt-24">
                <HomeNavbar />
                <div className="pb-8 ">
                    <MatchReportHeader fixture={fixture} />
                    <div className="flex flex-col lg:flex-row items-start ">
                        <div className="lg:w-[70%]">
                            <MatchReportFormation fixture={fixture} />
                        </div>
                        <div className="lg:w-[30%]">
                            <MatchReportStats fixture={fixture} />
                            <MatchReportEvents fixture={fixture} />
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </div>
        </>
    );
}
