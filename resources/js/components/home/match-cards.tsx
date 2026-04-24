import { PlaneIcon } from "lucide-react";
interface Match {
    id: string;
    date: string;
    time: string;
    homeTeam: string;
    homeTeamLogo?: string;
    awayTeam: string;
    awayTeamLogo?: string;
    homeScore?: number;
    awayScore?: number;
    venue: string;
    status: 'finished' | 'upcoming' | 'live';
}

interface LeagueStanding {
    position: number;
    team: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
}

interface MatchCardsProps {
    lastMatch?: Match;
    upcomingMatch?: Match;
    nextWeekMatch?: Match;
    standings?: LeagueStanding[];
    dark?: boolean;
}

export default function MatchCards({
    lastMatch = {
        id: '25',
        date: '2026-04-20',
        time: '19:00',
        homeTeam: 'PSS',
        homeTeamLogo: '/pssLogo.png',
        awayTeam: 'Persiku',
        awayTeamLogo: 'https://assets.ileague.id/uploads/images/logo/89/v/200/49.png',
        homeScore: 2,
        awayScore: 1,
        venue: 'Maguwoharjo',
        status: 'finished',
    },
    upcomingMatch = {
        id: '26',
        date: '2026-04-26',
        time: '19:00',
        homeTeam: 'Persiba',
        homeTeamLogo: 'https://logobase.net/wp-content/uploads/2025/09/Persiba-Balikpapan-Logo.webp',
        awayTeam: 'PSS',
        awayTeamLogo: '/pssLogo.png',
        venue: 'Batakan',
        status: 'upcoming',
    },
    nextWeekMatch = {
        id: '27',
        date: '2026-05-02',
        time: 'TBA',
        homeTeam: 'PSIS',
        homeTeamLogo: 'https://assets.ileague.id/uploads/images/club/lineup_PSIS_SEMARANG_1757324008.png',
        awayTeam: 'PSS',
        awayTeamLogo: '/pssLogo.png',
        venue: 'Maguwoharjo',
        status: 'upcoming',
    },
    standings = [
        { position: 1, team: 'PSS Sleman', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
        { position: 2, team: 'Persebaya', played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
        { position: 3, team: 'Madura United', played: 10, won: 5, drawn: 4, lost: 1, points: 19 },
        { position: 4, team: 'PSIS', played: 10, won: 5, drawn: 2, lost: 3, points: 17 },
        { position: 5, team: 'PSMS', played: 10, won: 4, drawn: 3, lost: 3, points: 15 },
    ],
    dark = false,
}: MatchCardsProps) {
    const getStatusBadge = (status: Match['status']) => {
        const styles = {
            finished: 'bg-gray-500',
            live: 'bg-red-500',
            upcoming: 'bg-[#0F7A4A]',
        };
        const labels = {
            finished: 'FT',
            live: 'LIVE',
            upcoming: 'Upcoming',
        };
        return (
            <span className={`rounded px-2 py-1 text-xs font-bold text-white ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return {
            month: months[date.getMonth()],
            day: date.getDate(),
        };
    };

const MatchCard = ({ match, label }: { match: Match; label: string }) => {
        const { month, day } = formatDate(match.date);
        const showScore = match.status === 'finished' && match.homeScore !== undefined && match.awayScore !== undefined;
        const showPending = match.status === 'upcoming';
        return (
            <div className={`flex flex-col w-full bg-white rounded shadow-lg`}>
                <div className="w-full h-16 bg-[#0F7A4A] flex items-center justify-center">
                    <span className="text-white font-bold uppercase text-lg">Match {label}</span>
                </div>
                <div className="flex flex-row flex-1">
                    <div className="flex flex-col justify-center items-center p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 w-1/4">
                        <div className="text-sm">{month}</div>
                        <div className="text-3xl">{day}</div>
                        <div className="text-xs">{match.time}</div>
                    </div>
                    <div className="p-3 mt-4 font-normal text-gray-800 w-3/4">
                        <div className="flex items-center justify-between ">
                            <div className="flex-1 text-center ">
                                <img
                                    src={match.homeTeamLogo}
                                    alt={match.homeTeam}
                                    className="w-10 h-10 object-contain mx-auto"
                                />
                                <span className="text-lg font-bold block">{match.homeTeam}</span>
                                {showScore ? (
                                    <span className="text-5xl font-black text-[#0F7A4A]">{match.homeScore}</span>
                                ) : (
                                    <span className="text-3xl font-bold text-gray-400">-</span>
                                )}
                            </div>
                            <div className="flex-1 text-center">
                                <img
                                    src={match.awayTeamLogo}
                                    alt={match.awayTeam}
                                    className="w-10 h-10 object-contain mx-auto"
                                />
                                <span className="text-lg font-bold block mt-1">{match.awayTeam}</span>
                                {showScore ? (
                                    <span className="text-5xl font-black text-[#1c1c1c]">{match.awayScore}</span>
                                ) : (
                                    <span className="text-3xl font-bold text-gray-400">-</span>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-3">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-bold">Std. {match.venue}</span>
                        </div>  
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className={`w-full pt-2 pb-10 ${dark ? 'bg-[#1C1C1C]' : 'bg-gray-50'}`}>
            
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="grid gap-4 sm:grid-cols-3">
                        <MatchCard match={lastMatch} label={lastMatch.id} />
                        <MatchCard match={upcomingMatch} label={upcomingMatch.id} />
                        <MatchCard match={nextWeekMatch} label={nextWeekMatch.id} />
                    </div>
                    <div className={`flex flex-col w-full bg-white rounded shadow-lg`}>
                        <div className="w-full h-16 bg-[#0F7A4A] flex items-center justify-center">
                            <span className="text-white font-bold uppercase text-lg">Pegadaian Liga 2 Championship</span>
                        </div>
                        <div className="p-2 ml-4">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-gray-500">
                                            <th className="pb-2 text-left">#</th>
                                            <th className="pb-2 text-left">Team</th>
                                            <th className="pb-2 text-center">P</th>
                                            <th className="pb-2 text-center">Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {standings.map((standing) => (
                                            <tr
                                                key={standing.position}
                                                className="border-t border-gray-200"
                                            >
                                                <td className="py-2 text-gray-500">
                                                    {standing.position}
                                                </td>
                                                <td className="py-2 font-medium text-gray-800">
                                                    {standing.team}
                                                </td>
                                                <td className="py-2 text-center text-gray-500">
                                                    {standing.played}
                                                </td>
                                                <td className="py-2 text-center font-bold text-[#0F7A4A]">
                                                    {standing.points}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}