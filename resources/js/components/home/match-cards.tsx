import { useState, useEffect } from 'react';

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
}

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
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateCountdown = () => {
            const timeFormatted = match.time.replace('.', ':');
            const targetDate = new Date(`${match.date}T${timeFormatted}:00`);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            } else {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, [match.date, match.time]);

    return (
        // Detail kartu pertandingan
        <div className="flex flex-col w-full h-full items-center justify-center font-calcio-italiano bg-[#f5f5f5]">
            {/* Title Pertandingan */}
            <div className="relative w-full h-16 sm:h-20 md:h-24 overflow-hidden bg-gradient-to-r from-[#Efbf04] via-[#d6af12] to-[#Efbf04] lg:-mt-14">
                <div className="relative z-10 flex flex-col items-center justify-center py-2 md:py-3">
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#1c1c1c] uppercase tracking-wider">Pegadaian Liga 2 Championship</p>
                    <p className="text-base sm:text-xl md:text-3xl font-bold text-[#1c1c1c] uppercase inline-block mx-auto text-center">
                        F i n a l
                    </p>
                </div>
                <div className="absolute inset-y-0 top-0 left-0 bg-[#fcfcfc] mix-blend-overlay transform -skew-x-30 origin-top w-32 opacity-10" />
                <div className="absolute inset-y-0 bg-[#fcfcfc] mix-blend-overlay transform -right-1 top-0 skew-x-30 origin-top w-32 opacity-10" />
            </div>
            {/* Info Pertandingan */}
            <div className="flex w-full items-center p-3 md:p-6 lg:-mt-8 flex-wrap">
                {/* Home Team */}
                <div className="w-1/3 flex flex-col lg:-mt-2 items-center min-w-0">
                    <img
                        src={match.homeTeamLogo}
                        alt={match.homeTeam}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-44 lg:h-44 object-contain"
                    />
                    <p className="text-xs sm:text-xs md:text-sm lg:text-xl text-center text-[#1c1c1c] mt-1 line-clamp-1">{match.homeTeam}</p>
                </div>
                {/* Detail Pertandingan */}
                <div className="w-1/3 text-center px-1 lg:mt-8 md:px-4 lg:px-8 min-w-0">
                    <p className="text-xs sm:text-xs md:text-base lg:text-lg text-[#1c1c1c] uppercase">{day} {month} 2026</p>
                    <p className="text-xs sm:text-xs md:text-base lg:text-lg text-[#1c1c1c] uppercase">{match.time} WIB</p>
                    <p className="text-xs sm:text-xs md:text-base lg:text-lg text-[#1c1c1c] uppercase">Std. {match.venue}</p>
                    <button className="border text-[#1c1c1c] mt-1 md:mt-4 border-[#1c1c1c] py-1.5 px-2 md:py-2.5 md:px-6 text-xs sm:text-xs md:text-sm cursor-pointer hover:bg-[#0f5133] hover:text-[#f5f5f5] transition-colors rounded">
                        Beli Tiket
                    </button>
                </div>
                {/* Away Team */}
                <div className="relative w-1/3 flex flex-col items-center min-w-0">
                    <img
                        src={match.awayTeamLogo}
                        alt={match.awayTeam}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-44 lg:h-44 object-contain"
                    />
                    <p className="text-xs sm:text-xs md:text-sm lg:text-xl text-center text-[#1c1c1c] mt-1 line-clamp-1">{match.awayTeam}</p>
                </div>
            </div>
            {/* Countdown  */}
            <div className="relative md:-mb-16 bg-[#1c1c1c] w-full lg:h-16 items-center justify-center md:h-10">
                <p className="flex items-center justify-center gap-1 sm:gap-2 text-base sm:text-lg md:text-2xl lg:text-3xl text-center p-1 text-white font-calcio-italiano flex-wrap">
                    <span className="text-xs sm:text-base">Pertandingan dimulai pada</span>
                    <span>{String(countdown.days).padStart(2, '0')}</span>:
                    <span>{String(countdown.hours).padStart(2, '0')}</span>:
                    <span>{String(countdown.minutes).padStart(2, '0')}</span>:
                    <span>{String(countdown.seconds).padStart(2, '0')}</span>
                </p>
            </div>
        </div>
    );
};

export default function MatchCards({
    nextWeekMatch = {
        id: '1',
        date: '2026-05-09',
        time: '19:00',
        homeTeam: 'PSS Sleman',
        homeTeamLogo: 'https://assets.ileague.id/uploads/images/logo/89/h/50/23.png',
        awayTeam: 'PSIS Semarang',
        awayTeamLogo: 'https://assets.ileague.id/uploads/images/club/lineup_PSIS_SEMARANG_1757324008.png',
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
}: MatchCardsProps) {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-2 sm:px-3 md:px-4 md:mt-10 lg:-mt-8 pb-6 sm:pb-8 md:pb-10">
            <div className="flex flex-col lg:flex-row md:rounded-xl bg-[#f5f5f5] shadow-2xl overflow-hidden">
                <div className="w-full lg:w-1/2">
                    <MatchCard match={nextWeekMatch} label={nextWeekMatch.id}/>
                </div>
                <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-white/20 p-2 sm:p-3 md:p-6 overflow-y-auto max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-96">
                    <h3 className="font-calcio-italiano text-sm sm:text-base md:text-2xl text-[#1c1c1c] uppercase mb-2 md:mb-4">
                        Klasemen
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-xs sm:text-xs md:text-base">
                            <thead>
                                <tr className="border-b border-gray-700 text-xs sm:text-[10px] md:text-sm text-[#1c1c1c] uppercase">
                                    <th className="pb-2 md:pb-3 pl-1 md:pl-2">#</th>
                                    <th className="pb-2 md:pb-3">Tim</th>
                                    <th className="pb-2 md:pb-3 text-center">M</th>
                                    <th className="pb-2 md:pb-3 text-center">M</th>
                                    <th className="pb-2 md:pb-3 text-center">S</th>
                                    <th className="pb-2 md:pb-3 text-center">K</th>
                                    <th className="pb-2 md:pb-3 text-center">Poin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.map((row) => (
                                    <tr
                                        key={row.position}
                                        className={`border-b border-gray-800 text-[#1c1c1c] ${
                                            row.team === 'PSS Sleman' ? 'bg-[#0F7A4A]/20' : ''
                                        }`}
                                    >
                                        <td className="py-2 md:py-3 pl-1 md:pl-2 font-medium">{row.position}</td>
                                        <td className="py-2 md:py-3 font-medium">{row.team}</td>
                                        <td className="py-2 md:py-3 text-center text-[#1c1c1c]">{row.played}</td>
                                        <td className="py-2 md:py-3 text-center text-[#1c1c1c]">{row.won}</td>
                                        <td className="py-2 md:py-3 text-center text-[#1c1c1c]">{row.drawn}</td>
                                        <td className="py-2 md:py-3 text-center text-[#1c1c1c]">{row.lost}</td>
                                        <td className="py-2 md:py-3 text-center font-bold text-[#0F7A4A]">{row.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
