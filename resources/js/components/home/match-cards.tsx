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
    standings?: LeagueStanding[];
}

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return {
        month: months[date.getMonth()],
        day: date.getDate(),
    };
};

const MatchCard = ({ match, label }: { match: Match; label: string }) => {
    const { month, day } = formatDate(match.date);
    const isFinished = match.status === 'finished' || match.status === 'live';
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const timeFormatted = match.time.replace('.', ':');
            const targetDate = new Date(`${match.date}T${timeFormatted}:00`);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60),
                );
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
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#f5f5f5] font-calcio-italiano">
            {/* Title Pertandingan */}
            <div className="relative h-16 w-full overflow-hidden bg-gradient-to-r from-[#0f7a4a] via-[#0f7a4a] to-[#0f7a4a] sm:h-20 md:h-24 lg:-mt-14">
                <div className="relative z-10 flex flex-col items-center justify-center py-2 md:py-3">
                    <p className="text-xl tracking-wider text-[#f5f5f5] uppercase sm:text-2xl md:text-3xl">
                        Pegadaian Liga 2 Championship
                    </p>
                    <p className="mx-auto inline-block text-center text-base text-[#f5f5f5] uppercase sm:text-xl md:text-3xl">
                        Final
                    </p>
                </div>
            </div>
            {/* Info Pertandingan */}
            <div className="flex w-full flex-wrap items-center p-3 md:p-6 lg:-mt-8">
                {/* Home Team */}
                <div className="flex w-1/3 min-w-0 flex-col items-center lg:-mt-2">
                    <img
                        src={match.homeTeamLogo}
                        alt={match.homeTeam}
                        className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-44 lg:w-44"
                    />
                    <p className="mt-1 line-clamp-1 text-center text-xs text-[#1c1c1c] sm:text-xs md:text-sm lg:text-xl">
                        {match.homeTeam}
                    </p>
                </div>
                {/* Detail Pertandingan */}
                <div className="w-1/3 min-w-0 px-1 text-center md:px-4 lg:mt-8 lg:px-8">
                    {isFinished ? (
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-3">
                                <span className="font-calcio-italiano text-3xl text-[#0f7a4a] sm:text-4xl md:text-5xl lg:text-6xl">
                                    {match.homeScore}
                                </span>
                                <span className="font-calcio-italiano text-2xl text-[#1c1c1c] sm:text-3xl md:text-4xl lg:text-5xl">
                                    :
                                </span>
                                <span className=" text-3xl font-calcio-italiano text-[#1c1c1c] sm:text-4xl md:text-5xl lg:text-6xl">
                                    {match.awayScore}
                                </span>
                            </div>
                            <p className="text-xs text-[#1c1c1c] uppercase sm:text-xs md:text-sm lg:text-base">
                                {day} {month} 2026
                            </p>
                            <a className="mt-1 cursor-pointer rounded border border-[#0f7a4a] px-2 py-1.5 text-xs text-[#0f7a4a] transition-colors hover:bg-[#0f7a4a] hover:text-white sm:text-xs md:mt-2 md:px-6 md:py-2.5 md:text-sm" href='/kompetisi/week/1'>
                                Review
                            </a>
                        </div>
                    ) : (
                        <>
                            <p className="text-xs text-[#1c1c1c] uppercase sm:text-xs md:text-base lg:text-lg">
                                {day} {month} 2026
                            </p>
                            <p className="text-xs text-[#1c1c1c] uppercase sm:text-xs md:text-base lg:text-lg">
                                {match.time} WIB
                            </p>
                            <p className="text-xs text-[#1c1c1c] uppercase sm:text-xs md:text-base lg:text-lg">
                                Std. {match.venue}
                            </p>
                            <button className="mt-1 cursor-pointer rounded border border-[#1c1c1c] px-2 py-1.5 text-xs text-[#1c1c1c] transition-colors hover:bg-[#0f5133] hover:text-[#f5f5f5] sm:text-xs md:mt-4 md:px-6 md:py-2.5 md:text-sm">
                                Beli Tiket
                            </button>
                        </>
                    )}
                </div>
                {/* Away Team */}
                <div className="relative flex w-1/3 min-w-0 flex-col items-center">
                    <img
                        src={match.awayTeamLogo}
                        alt={match.awayTeam}
                        className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-44 lg:w-44"
                    />
                    <p className="mt-1 line-clamp-1 text-center text-xs text-[#1c1c1c] sm:text-xs md:text-sm lg:text-xl">
                        {match.awayTeam}
                    </p>
                </div>
            </div>
            {/* Countdown */}
            <div className="relative flex w-full items-center justify-center bg-[#1c1c1c] md:-mb-16 md:h-10 lg:h-16">
                <p className="flex items-center justify-center gap-x-2 pb-4 text-center font-calcio-italiano text-base text-white sm:text-lg md:text-2xl lg:text-4xl">
                    <span className="text-xs sm:text-base">
                        Pertandingan dimulai pada
                    </span>
                    <span className="tabular-nums">
                        {String(countdown.days).padStart(2, '0')}
                    </span>
                    <span className="tabular-nums">:</span>
                    <span className="tabular-nums">
                        {String(countdown.hours).padStart(2, '0')}
                    </span>
                    <span className="tabular-nums">:</span>
                    <span className="tabular-nums">
                        {String(countdown.minutes).padStart(2, '0')}
                    </span>
                    <span className="tabular-nums">:</span>
                    <span className="tabular-nums">
                        {String(countdown.seconds).padStart(2, '0')}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default function MatchCards({
    lastMatch,
    upcomingMatch = {
        id: 'upcoming',
        date: '2026-05-24',
        time: '19.00',
        homeTeam: 'PSS SLEMAN',
        homeTeamLogo:
            'https://assets.ileague.id/uploads/images/logo/89/v/200/23.png',
        awayTeam: 'PSIS SEMARANG',
        awayTeamLogo:
            'https://assets.ileague.id/uploads/images/logo/89/v/200/20.png',
        venue: 'MAGUWOHARJO',
        status: 'upcoming',
    },
    standings = [
        {
            position: 1,
            team: 'PSS SLEMAN',
            played: 10,
            won: 7,
            drawn: 2,
            lost: 1,
            points: 23,
        },
        {
            position: 2,
            team: 'Persebaya',
            played: 10,
            won: 6,
            drawn: 3,
            lost: 1,
            points: 21,
        },
        {
            position: 3,
            team: 'Madura United',
            played: 10,
            won: 5,
            drawn: 4,
            lost: 1,
            points: 19,
        },
        {
            position: 4,
            team: 'PSIS Semarang',
            played: 10,
            won: 5,
            drawn: 2,
            lost: 3,
            points: 17,
        },
        {
            position: 5,
            team: 'PSMS Medan',
            played: 10,
            won: 4,
            drawn: 3,
            lost: 3,
            points: 15,
        },
    ],
}: MatchCardsProps) {
    const primaryMatch = lastMatch ?? upcomingMatch;

    return (
        <section className="relative z-10 mx-auto max-w-7xl px-2 pb-6 sm:px-3 sm:pb-8 md:mt-10 md:px-4 md:pb-10 lg:-mt-8">
            <div className="flex flex-col overflow-hidden bg-[#f5f5f5] shadow-2xl md:rounded-xl lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <MatchCard match={primaryMatch} label={primaryMatch.id} />
                </div>
                <div className="max-h-[250px] w-full overflow-y-auto border-t border-white/20 p-2 sm:max-h-[300px] sm:p-3 md:max-h-[400px] md:p-6 lg:max-h-96 lg:w-1/2 lg:border-t-0 lg:border-l">
                    <h3 className="mb-2 font-calcio-italiano text-sm text-[#1c1c1c] uppercase sm:text-base md:mb-4 md:text-2xl">
                        Klasemen
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-xs sm:text-xs md:text-base">
                            <thead>
                                <tr className="border-b border-gray-700 text-xs text-[#1c1c1c] uppercase sm:text-[10px] md:text-sm">
                                    <th className="pb-2 pl-1 md:pb-3 md:pl-2">
                                        #
                                    </th>
                                    <th className="pb-2 md:pb-3">Tim</th>
                                    <th className="pb-2 text-center md:pb-3">
                                        M
                                    </th>
                                    <th className="pb-2 text-center md:pb-3">
                                        M
                                    </th>
                                    <th className="pb-2 text-center md:pb-3">
                                        S
                                    </th>
                                    <th className="pb-2 text-center md:pb-3">
                                        K
                                    </th>
                                    <th className="pb-2 text-center md:pb-3">
                                        Poin
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.map((row) => (
                                    <tr
                                        key={row.position}
                                        className={`border-b border-gray-800 text-[#1c1c1c] ${
                                            row.team === 'PSS SLEMAN'
                                                ? 'bg-[#0F7A4A]/20'
                                                : ''
                                        }`}
                                    >
                                        <td className="py-2 pl-1 font-medium md:py-3 md:pl-2">
                                            {row.position}
                                        </td>
                                        <td className="py-2 font-medium md:py-3">
                                            {row.team}
                                        </td>
                                        <td className="py-2 text-center text-[#1c1c1c] md:py-3">
                                            {row.played}
                                        </td>
                                        <td className="py-2 text-center text-[#1c1c1c] md:py-3">
                                            {row.won}
                                        </td>
                                        <td className="py-2 text-center text-[#1c1c1c] md:py-3">
                                            {row.drawn}
                                        </td>
                                        <td className="py-2 text-center text-[#1c1c1c] md:py-3">
                                            {row.lost}
                                        </td>
                                        <td className="py-2 text-center font-bold text-[#0F7A4A] md:py-3">
                                            {row.points}
                                        </td>
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
