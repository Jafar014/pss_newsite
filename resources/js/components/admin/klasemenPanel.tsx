import { useMemo, useState } from "react";

interface StandingItem {
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
    competition: string;
    grup: string;
    scraped_at: string | null;
}

export default function StandingPanel({ klasemen, clubs }: { klasemen: StandingItem[]; clubs: Record<string, { id: number; slug: string; name: string; logo_url: string }> }) {
    const groups = useMemo(() => {
        const map = new Map<string, StandingItem[]>();
        for (const item of klasemen) {
            const key = item.grup || 'Umum';
            if (!map.has(key)) map.set(key, []);
            map.get(key)!.push(item);
        }
        return Array.from(map.entries());
    }, [klasemen]);

    const [activeGroup, setActiveGroup] = useState(groups.length > 0 ? groups[0][0] : '');

    const currentItems = useMemo(() => {
        return groups.find(([g]) => g === activeGroup)?.[1] ?? [];
    }, [groups, activeGroup]);

    const groupLabels = useMemo(() => groups.map(([g]) => g), [groups]);

    return (
        <>
            <div className="w-full h-full flex flex-col">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Pegadaian Championship Liga 2</h1>

                {/* Tabel */}
                <div className="relative mt-8 rounded-md flex-1 min-h-0">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th colSpan={11} className="px-4 py-3 text-sm font-bold text-[#0f7a4a] bg-[#0f7a4a]/10 uppercase tracking-wider text-center">
                                    Grup {activeGroup}
                                </th>
                            </tr>
                            <tr className="bg-[#0f7a4a]/15 text-left">
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">#</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Tim</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Logo</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">M</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">W</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">D</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">L</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">GM</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">GK</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">SG</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Poin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length === 0 ? (
                                <tr>
                                    <td colSpan={11} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                        Tidak ada data klasemen
                                    </td>
                                </tr>
                            ) : (
                                currentItems.map((item: StandingItem) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.pos}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c] font-medium">{item.team_name}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">
                                            {clubs[item.team_name]?.logo_url ? (
                                                <img src={clubs[item.team_name].logo_url} alt={item.team_name} className="w-6 h-6 object-contain" />
                                            ) : '-'}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.played}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.win}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.draw}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.lose}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.goals_for}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.goals_against}</td>
                                        <td className={`px-4 py-3 text-sm font-medium ${item.goal_difference > 0 ? 'text-green-600' : item.goal_difference < 0 ? 'text-red-600' : ''}`}>
                                            {item.goal_difference > 0 ? '+' : ''}{item.goal_difference}
                                        </td>
                                        <td className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">{item.points}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Group Switcher */}
                {groupLabels.length > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {groupLabels.map((label) => (
                            <button
                                key={label}
                                onClick={() => setActiveGroup(label)}
                                className={`px-6 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                                    activeGroup === label
                                        ? 'bg-[#0f7a4a] text-white'
                                        : 'bg-[#0f7a4a]/10 text-[#0f7a4a] hover:bg-[#0f7a4a]/20'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
