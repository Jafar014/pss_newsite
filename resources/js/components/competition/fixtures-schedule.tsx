import { useEffect, useMemo, useState } from 'react';

interface CalendarDay {
    day: number;
    currentMonth: boolean;
    date: string;
    match?: FixtureItem;
}

interface FixtureItem {
    id: number;
    home_team: string;
    away_team: string;
    home_goals: number | null;
    away_goals: number | null;
    status: string;
    gameweek: string;
    isHome: boolean;
    opponent: string;
}

interface FixtureData {
    id: number;
    competition: string;
    gameweek: string;
    home_team: string;
    away_team: string;
    home_goals: number | null;
    away_goals: number | null;
    match_date: string;
    status: string;
    venue: string;
}

interface KlasemenData {
    id: number;
    pos: number;
    team_name: string;
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals_for: number;
    goals_against: number;
    goal_difference: number;
    points: number;
}

interface FixtureScheduleProps {
    fixtures: FixtureData[];
    klasemen: KlasemenData[];
}

const MONTHS = [
    'JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI',
    'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'
];

const DAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

function generateCalendarDays(year: number, month: number, fixturesMap: Map<string, FixtureData>): CalendarDay[] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    let startDayOfWeek = firstDay.getDay() - 1;
    if (startDayOfWeek < 0) {
        startDayOfWeek = 6;
    }
    
    const days: CalendarDay[] = [];
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        days.push({
            day,
            currentMonth: false,
            date: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const fixture = fixturesMap.get(dateStr);
        let match: FixtureItem | undefined;
        if (fixture) {
            const isHome = fixture.home_team === 'PSS SLEMAN';
            match = {
                id: fixture.id,
                home_team: fixture.home_team,
                away_team: fixture.away_team,
                home_goals: fixture.home_goals,
                away_goals: fixture.away_goals,
                status: fixture.status,
                gameweek: fixture.gameweek,
                isHome,
                opponent: isHome ? fixture.away_team : fixture.home_team,
            };
        }
        days.push({
            day: i,
            currentMonth: true,
            date: dateStr,
            match,
        });
    }
    
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        days.push({
            day: i,
            currentMonth: false,
            date: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
        });
    }
    
    return days;
}

function getInitials(name: string): string {
    return name
        .replace(/[FCK]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0])
        .join('')
        .toUpperCase() || name[0]?.toUpperCase() || '?';
}

function TeamLogo({ name, className }: { name: string; className?: string }) {
    const colors = [
        '#0f7a4a', '#1c1c1c', '#Efbf04', '#e74c3c', '#3498db',
        '#9b59b6', '#1abc9c', '#e67e22', '#2ecc71', '#f39c12',
    ];
    const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const bg = colors[hash % colors.length];
    const initials = getInitials(name);
    return (
        <div
            className={`flex items-center justify-center rounded-full text-white font-bold ${className || 'w-10 h-10 text-xs'}`}
            style={{ backgroundColor: bg }}
        >
            {initials}
        </div>
    );
}

export default function FixtureSchedule({ fixtures, klasemen }: FixtureScheduleProps) {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1));
    const [currentTime, setCurrentTime] = useState('');
    const today = new Date();

    const fixturesMap = useMemo(() => {
        const map = new Map<string, FixtureData>();
        fixtures.forEach(f => map.set(f.match_date, f));
        return map;
    }, [fixtures]);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = generateCalendarDays(year, month, fixturesMap);

    const firstMatchDay = days.find(d => d.match && d.currentMonth);
    const [selectedMatch, setSelectedMatch] = useState<{ date: string; match: FixtureItem } | null>(
        firstMatchDay && firstMatchDay.match ? { date: firstMatchDay.date, match: firstMatchDay.match } : null
    );

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const firstMatch = days.find(d => d.match && d.currentMonth);
        setSelectedMatch(
            firstMatch && firstMatch.match ? { date: firstMatch.date, match: firstMatch.match } : null
        );
    }, [month, year]);

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const pssGoals = (m: FixtureItem): number | string => {
        if (m.home_goals === null || m.away_goals === null) return '-';
        return m.isHome ? m.home_goals : m.away_goals;
    };

    const oppGoals = (m: FixtureItem): number | string => {
        if (m.home_goals === null || m.away_goals === null) return '-';
        return m.isHome ? m.away_goals : m.home_goals;
    };

    return(
        <section className="w-full relative bg-[#f5f5f5]">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-16">
                    <h2 className="font-calcio-italiano mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Jadwal, Hasil, dan Klasemen</h2>
                </div>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row gap-6 p-8 items-start">
                {/* Kalender */}
                <div className="w-full lg:w-3/4 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col h-full">
                        <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <div className="flex items-center gap-4">
                                <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex-none" aria-label="Bulan sebelumnya">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div className="w-56 text-center flex-none">
                                    <h1 className="font-calcio-italiano text-2xl text-[#1c1c1c] leading-6">
                                        {MONTHS[month]} {year}
                                    </h1>
                                </div>
                                <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex-none" aria-label="Bulan berikutnya">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-4 font-calcio-italiano">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#0f7a4a]" />
                                    <span className="text-2xl text-[#0f7a4a]">Home</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#1c1c1c]" />
                                    <span className="text-2xl text-[#1c1c1c]">Away</span>
                                </div>
                            </div>
                            <span className="font-calcio-italiano text-2xl text-[#1c1c1c] leading-6">
                                {currentTime}
                            </span>
                        </header>

                        <div className="flex flex-col flex-auto">
                            <div className="grid grid-cols-7 gap-px bg-gray-200 text-center text-xl leading-6 text-[#1c1c1c] font-calcio-italiano border-t border-b">
                                {DAYS.map((day) => (
                                    <div key={day} className="bg-white py-3">
                                        <span>{day}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop */}
                            <div className="hidden lg:grid lg:grid-cols-7 lg:flex-auto bg-gray-200 gap-px">
                                {days.map((item, i) => {
                                    const isToday = item.currentMonth && item.day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                                    const hasMatch = item.match !== undefined;
                                    const isHome = item.match?.isHome;
                                    const isSelected = selectedMatch?.date === item.date;
                                    const bgMatch = isHome ? 'bg-[#0f7a4a]/85 text-[#f5f5f5]' : 'bg-[#1c1c1c]/85 text-white';
                                    return (
                                        <button key={i} type="button"
                                            onClick={() => item.match && setSelectedMatch({ date: item.date, match: item.match })}
                                            className={`relative min-h-[120px] px-2 py-2 w-full text-left ${hasMatch ? bgMatch : isToday ? 'bg-[#Efbf04]/50' : !item.currentMonth ? 'bg-gray-50' : 'bg-white'} ${hasMatch ? 'cursor-pointer hover:opacity-80' : 'cursor-default'} ${isSelected ? 'ring-2 ring-[#0f7a4a]' : ''}`}
                                        >
                                            <time dateTime={item.date}
                                                className={`absolute top-2 left-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg font-calcio-italiano ${hasMatch ? 'bg-transparent' : isToday ? 'text-[#0f7a4a] font-bold' : item.currentMonth ? 'text-gray-900' : 'text-gray-400'}`}
                                            >
                                                {item.day}
                                            </time>
                                            {item.match && (() => {
                                                const parts = item.match.opponent.split(' ');
                                                const line1 = parts[0] || '';
                                                const line2 = parts.slice(1).join(' ') || '';
                                                return (
                                                    <div className="flex flex-col items-center justify-center mt-6">
                                                        <TeamLogo name={item.match.opponent} className="w-24 h-24 text-lg mb-2" />
                                                        <span className="text-xs font-bold text-white text-center leading-tight block">
                                                            {line1}
                                                        </span>
                                                        {line2 && (
                                                            <span className="text-[10px] font-bold text-white/80 text-center leading-tight block">
                                                                {line2}
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })()}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Mobile */}
                            <div className="grid grid-cols-7 lg:hidden flex-auto bg-gray-200 gap-px">
                                {days.map((item, i) => {
                                    const isToday = item.currentMonth && item.day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                                    const hasMatch = item.match !== undefined;
                                    const isHome = item.match?.isHome;
                                    const isSelected = selectedMatch?.date === item.date;
                                    const bgMatch = isHome ? 'bg-[#0f7a4a] text-white' : 'bg-[#1c1c1c] text-white';
                                    return (
                                        <button key={i} type="button"
                                            onClick={() => item.match && setSelectedMatch({ date: item.date, match: item.match })}
                                            className={`flex h-16 flex-col px-2 py-1 focus:z-10 ${hasMatch ? bgMatch : isToday ? 'bg-[#0f7a4a]/65 text-white' : item.currentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400'} ${hasMatch ? 'cursor-pointer hover:opacity-80' : 'cursor-default'} ${isSelected ? 'ring-2 ring-[#0f7a4a]' : ''}`}
                                        >
                                            <time dateTime={item.date} className="ml-auto text-sm font-semibold">
                                                {item.day}
                                            </time>
                                            {item.match && (
                                                <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                                                    <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-white" />
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/4 flex flex-col gap-6">
                    {/* Kartu Pertandingan */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-4 bg-[#0f7a4a] text-white">
                            <h3 className="text-2xl font-calcio-italiano">
                                {selectedMatch ? 'Pertandingan' : 'Pilih Tanggal'}
                            </h3>
                        </div>
                        {selectedMatch ? (
                            <div className="p-6 flex flex-col items-center">
                                <span className="text-sm text-gray-500 font-calcio-italiano mb-5">
                                    {new Date(selectedMatch.date + 'T00:00:00').toLocaleDateString('id-ID', {
                                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                    })}
                                </span>
                                <div className="flex items-center justify-center w-full gap-6">
                                    <div className="flex flex-col items-center gap-2 flex-1">
                                        {selectedMatch.match.home_team === 'PSS SLEMAN' ? (
                                            <img src="/pssLogo.png" alt="PSS" className="w-16 h-16 object-contain" />
                                        ) : (
                                            <TeamLogo name={selectedMatch.match.home_team} className="w-16 h-16 text-lg" />
                                        )}
                                        <span className="font-calcio-italiano text-lg  text-[#1c1c1c] text-center leading-tight max-w-[120px] truncate">{selectedMatch.match.home_team === 'PSS SLEMAN' ? 'PSS' : selectedMatch.match.home_team}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-3">
                                            <span className={`text-3xl font-calcio-italiano ${selectedMatch.match.home_team === 'PSS SLEMAN' ? 'text-[#0f7a4a]' : 'text-[#1c1c1c]'}`}>
                                                {selectedMatch.match.home_goals ?? '-'}
                                            </span>
                                            <span className="text-3xl font-calcio-italiano  text-[#1c1c1c]">-</span>
                                            <span className={`text-3xl  font-calcio-italiano ${selectedMatch.match.away_team === 'PSS SLEMAN' ? 'text-[#0f7a4a]' : 'text-[#1c1c1c]'}`}>
                                                {selectedMatch.match.away_goals ?? '-'}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400 mt-2 font-calcio-italiano">Pekan {selectedMatch.match.gameweek}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 flex-1">
                                        {selectedMatch.match.away_team === 'PSS SLEMAN' ? (
                                            <img src="/pssLogo.png" alt="PSS" className="w-16 h-16 object-contain" />
                                        ) : (
                                            <TeamLogo name={selectedMatch.match.away_team} className="w-16 h-16 text-lg" />
                                        )}
                                        <span className="font-calcio-italiano text-lg text-[#1c1c1c] text-center leading-tight max-w-[120px] truncate">{selectedMatch.match.away_team === 'PSS SLEMAN' ? 'PSS' : selectedMatch.match.away_team}</span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <span className={`px-5 cursor-pointer py-3 rounded-full text-sm font-calcio-italiano  text-white ${selectedMatch.match.isHome ? 'bg-[#0f7a4a]' : 'bg-[#1c1c1c]'}`}>
                                        Review
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6 text-center text-gray-400 font-calcio-italiano">
                                Klik tanggal bertanding untuk melihat detail
                            </div>
                        )}
                    </div>

                    {/* Klasemen */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                        <div className="relative w-full">
                            <div className="p-4 bg-[#0f7a4a] text-white">
                                <h3 className="text-2xl font-calcio-italiano">Klasemen</h3>
                            </div>
                            <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-100 text-gray-600 sticky top-0">
                                            <tr className="text-center font-calcio-italiano text-lg">
                                                <th className="p-2 text-left">#</th>
                                                <th className="p-2">Tim</th>
                                                <th className="p-2 font-semibold">M</th>
                                                <th className="p-2 font-semibold">Pts</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {klasemen.map((k) => (
                                                <tr key={k.id} className={`border-b border-gray-200 hover:bg-gray-50 transition ${k.team_name === 'PSS SLEMAN' ? 'bg-[#0f7a4a]/10' : ''}`}>
                                                    <td className="p-2 text-center font-medium text-gray-500">{k.pos}</td>
                                                    <td className="p-2 flex items-center gap-2">
                                                        <TeamLogo name={k.team_name} className="w-6 h-6 text-[8px]" />
                                                        <span className={`font-medium font-calcio-italiano truncate ${k.team_name === 'PSS SLEMAN' ? 'text-[#0f7a4a]' : 'text-[#1c1c1c]'}`}>
                                                            {k.team_name}
                                                        </span>
                                                    </td>
                                                    <td className="p-2 text-xl text-center font-calcio-italiano text-[#1c1c1c]">{k.played}</td>
                                                    <td className="p-2 text-xl text-center font-calcio-italiano text-[#1c1c1c]">{k.points}</td>
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