import { useState, useMemo } from 'react';

interface PlayerData {
    id: number;
    firstName: string;
    lastName: string;
    number: string;
    position: string;
    image: string;
    matches_played: number;
    goals: number;
    minutes: number;
}

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function JerseyIcon({ number, active }: { number: string; active: boolean }) {
    return (
        <svg className={`w-20 h-20 transition-colors duration-200 ${active ? 'text-white' : 'text-[#0f7a4a]'}`} viewBox="0 0 32 32" fill="none">
            <path
                d="M20 2c.7 0 1.3.1 2 .3l3.7 1.9c.7.4 1.1 1 1.1 1.8v.5l-2.7 4.6c-.3.5-.8.9-1.4.9H21v12.5c0 1-.9 1.9-1.9 1.9h-9.2c-1 0-1.9-.9-1.9-1.9V12H7.3c-.6 0-1.1-.4-1.4-.9L3.2 6.5V6c0-.8.4-1.4 1.1-1.8L8 2.3C8.7 2.1 9.3 2 10 2h10z"
                fill="currentColor"
                opacity="0.15"
            />
            <path
                d="M20 3c.7 0 1.3.1 2 .3l3.7 1.9c.7.4 1.1 1 1.1 1.8v.5l-2.7 4.6c-.3.5-.8.9-1.4.9H21v12.5c0 1-.9 1.9-1.9 1.9h-9.2c-1 0-1.9-.9-1.9-1.9V12H7.3c-.6 0-1.1-.4-1.4-.9L3.2 6.5V6c0-.8.4-1.4 1.1-1.8L8 2.3C8.7 2.1 9.3 2 10 2h10z"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.6"
            />
            <text
                x="16"
                y="20"
                textAnchor="middle"
                className="text-[10px] font-bold"
                fill="currentColor"
                dominantBaseline="central"
            >
                {number}
            </text>
        </svg>
    );
}

function getPositionGroup(position: string): string {
    const pos = position.toLowerCase();
    if (['goalkeeper', 'kiper'].includes(pos)) return 'GK';
    if (['defender', 'bek'].includes(pos)) return 'DF';
    if (['midfielder', 'gelandang'].includes(pos)) return 'MF';
    if (['forward', 'penyerang', 'striker'].includes(pos)) return 'ST';
    return position.slice(0, 2).toUpperCase();
}

const POSITION_FILTERS = ['All', 'GK', 'DF', 'MF', 'ST'];

export default function HomePlayers({ players }: { players?: PlayerData[] }) {
    const shuffled = useMemo(() => shuffle(players ?? []), [players]);
    const [positionFilter, setPositionFilter] = useState('All');
    const [selectedId, setSelectedId] = useState<number>(() => {
        if (shuffled.length === 0) return 0;
        return shuffled[Math.floor(Math.random() * shuffled.length)].id;
    });

    const filteredPlayers = positionFilter === 'All'
        ? shuffled
        : shuffled.filter((p) => getPositionGroup(p.position) === positionFilter);

    const player = filteredPlayers.find((p) => p.id === selectedId) ?? filteredPlayers[0] ?? shuffled[0];

    if (!players || players.length === 0) return null;

    const minutesDisplay = player.minutes.toLocaleString();

    return (
        <section className="w-full bg-[#f5f5f5]">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]" />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <h2 className="font-calcio-italiano text-4xl text-center md:text-6xl lg:text-7xl tracking-wider text-[#f5f5f5] uppercase">
                        Skuat Utama
                    </h2>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 px-12 pb-8 mt-8">
                {/* List Pemain */}
                <div className="border border-[#1c1c1c]/40 border-r-0 rounded-l-xl w-full bg-white shadow-sm flex flex-col h-80 md:h-96">
                    <div className="flex border-b border-[#1c1c1c]/5">
                        {POSITION_FILTERS.map((pos) => (
                            <button
                                key={pos}
                                onClick={() => { setPositionFilter(pos); setSelectedId(0); }}
                                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                                    positionFilter === pos
                                        ? 'text-[#f5f5f5] bg-[#0f7a4a]'
                                        : 'text-[#1c1c1c]/50 hover:text-[#0f7a4a] hover:bg-[#0f7a4a]/5'
                                }`}
                            >
                                {pos}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#0f7a4a]/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                        <div className={`grid grid-flow-col grid-rows-2 h-full ${positionFilter === 'GK' ? 'place-content-center' : ''}`}>
                            {filteredPlayers.map((p) => {
                                const isActive = p.id === selectedId;
                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => setSelectedId(p.id)}
                                        className={`w-48 flex flex-col items-center justify-center gap-3 text-center transition-all duration-200 cursor-pointer border-r border-b border-[#1c1c1c]/5 ${
                                            isActive
                                                ? 'bg-[#0f7a4a] text-white'
                                                : 'text-[#1c1c1c] hover:bg-[#f5f5f5]'
                                        }`}
                                    >
                                        <JerseyIcon number={p.number} active={isActive} />
                                        <div className="flex flex-col gap-0.5">
                                            <span className={`text-lg leading-none transition-colors duration-200 ${
                                                isActive ? 'text-white/70' : 'text-[#1c1c1c]/60'
                                            }`}>
                                                {p.firstName.charAt(0)}.
                                            </span>
                                            <span className={`text-xl font-bold leading-none transition-colors duration-200 ${
                                                isActive ? 'text-white' : 'text-[#1c1c1c]'
                                            }`}>
                                                {p.lastName}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Card section */}
                <div className="ml-auto w-full flex border border-[#1c1c1c]/40 shadow-sm h-80 md:h-96">
                    <div className="w-[65%]">
                        {/* Foto */}
                        <div className="h-4/5 relative overflow-hidden bg-white">
                            <img src={player.image} alt={`${player.firstName} ${player.lastName}`} className="w-full h-full object-contain" />
                        </div>
                        {/* Nama dan nomor */}
                        <div className="h-1/5 flex">
                            <div className="w-[75%] bg-[#1c1c1c] border-r flex items-center justify-center">
                                <h1 className="text-[#f5f5f5] text-3xl tracking-tight font-semibold">
                                    {player.firstName} {player.lastName}
                                </h1>
                            </div>
                            <div className="w-[25%] bg-[#0f7a4a] flex items-center justify-center">
                                <h1 className="text-[#f5f5f5] text-7xl font-semibold">
                                    {player.number}
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* info section */}
                    <div className="w-[35%] bg-[#f5f5f5] flex flex-col items-end justify-center px-4">
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#0f7a4a] mb-1">Position</p>
                        <h2 className="font-bold text-2xl uppercase italic text-[#1c1c1c] mb-5">{player.position}</h2>
                        <div className="w-full space-y-3">
                            <div className="flex items-center justify-between border-b border-[#0f7a4a]/20 pb-2">
                                <span className="text-xs uppercase tracking-wider text-[#0f7a4a] font-bold">Minutes</span>
                                <span className="text-sm font-bold text-[#1c1c1c]">{minutesDisplay}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#0f7a4a]/20 pb-2">
                                <span className="text-xs uppercase tracking-wider text-[#0f7a4a] font-bold">Goals</span>
                                <span className="text-sm font-bold text-[#1c1c1c]">{player.goals}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-wider text-[#0f7a4a] font-bold">Matches</span>
                                <span className="text-sm font-bold text-[#1C1C1C]">{player.matches_played}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
