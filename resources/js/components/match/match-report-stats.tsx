interface MatchReportStatsProps {
    fixture: string;
}

const statData: { label: string; home: string; away: string }[] = [
    { label: 'Skor', home: '2', away: '1' },
    { label: 'Penguasaan Bola', home: '65%', away: '35%' },
    { label: 'Shot on Goal', home: '5', away: '3' },
    { label: 'Total Attempts', home: '12', away: '8' },
    { label: 'Shot Accuracy', home: '42%', away: '38%' },
    { label: 'Successful Pass', home: '180', away: '145' },
    { label: 'Failed Pass', home: '45', away: '62' },
    { label: 'Corner Kick', home: '6', away: '4' },
    { label: 'Tackles', home: '22', away: '18' },
    { label: 'Offside', home: '3', away: '2' },
    { label: 'Foul', home: '14', away: '16' },
    { label: 'Yellow Card', home: '2', away: '3' },
    { label: 'Red Card', home: '0', away: '1' },
];

export default function MatchReportStats({ fixture }: MatchReportStatsProps) {
    return (
        <div className="w-full h-full px-4 md:px-0 py-6 md:py-8 pr-0 md:pr-8 lg:mt-19">
            <span className="text-[#1c1c1c] text-lg md:text-xl font-calcio-italiano">Statistik Pertandingan</span>
            <div className="w-full mt-2 border border-[#1c1c1c]">
                <div className="grid grid-cols-3 bg-[#1c1c1c] text-white">
                    <div className="px-2.5 py-1.5 text-xs font-bold text-center">PSS</div>
                    <div className="px-2.5 py-1.5 text-xs text-center border-x border-white/30">vs</div>
                    <div className="px-2.5 py-1.5 text-xs font-bold text-center">Opponent</div>
                </div>
                {statData.map((stat, i) => (
                    <div key={i} className="grid grid-cols-3 font-bold bg-[#f5f5f5] border-t border-[#1c1c1c]">
                        <div className="px-2.5 py-1 text-xs text-[#1c1c1c] text-center font-medium">{stat.home}</div>
                        <div className="px-2.5 py-1 text-xs text-[#1c1c1c] text-center border-x border-[#1c1c1c]">{stat.label}</div>
                        <div className="px-2.5 py-1 text-xs text-[#1c1c1c] text-center font-medium">{stat.away}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
