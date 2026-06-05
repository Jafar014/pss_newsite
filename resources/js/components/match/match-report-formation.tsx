import { ArrowDown, ArrowUpDown } from "lucide-react";

interface MatchReportFormationProps {
    fixture: string;
}

interface PlayerInfo {
    number: number;
    name: string;
    subMinute?: string;
    isCaptain?: boolean;
}

const items: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

const playerPositions: Record<number, PlayerInfo> = {
    5: { number: 5, name: 'Iman Fath', subMinute: "80" },
    2: { number: 2, name: 'S. Wibowo', subMinute: "72" },
    8: { number: 8, name: 'K. Jefri' },
    15: { number: 9, name: 'M. Iqbal', subMinute: "72" },
    13: { number: 13, name: 'Jehan Pahlevi', isCaptain: true },
    10: { number: 17, name: 'H. Saputro', subMinute: "80" },
    18: { number: 18, name: 'A. Syahputra' },
    20: { number: 20, name: 'A. Nugroho',  },
    22: { number: 21, name: 'D. Pratama' },
    26: { number: 26, name: 'B. Pahlevi' },
    29: { number: 29, name: 'R. Sanjaya', subMinute: "60" },
};



export default function MatchReportFormation({ fixture }: MatchReportFormationProps) {
    return (
        <div className="w-full h-full p-4 md:p-8">
            <div className="max-w-5xl flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                {/* Title formasi */}
                <span className="font-calcio-italiano text-[#1c1c1c] text-lg md:text-xl lg:text-2xl">Formasi: 4-3-3</span>
                <span className="font-calcio-italiano text-[#1c1c1c] text-sm md:text-base lg:text-lg ml-64">3-Mei-2026 | Maguwoharjo | vs Opponent</span>
                <span className="font-calcio-italiano text-[#1c1c1c] text-sm md:text-base lg:text-lg ml-auto">Pelatih: Ansyari Lubis</span>
            </div>
            {/* Peletakan formasi */}
            <div className="max-w-5xl h-[50vh] md:h-[500px] grid grid-cols-6 grid-rows-5 bg-[url(/public/soccer-lines.png)] bg-no-repeat bg-[length:100%_100%] overflow-hidden [transform:rotate(270deg)] lg:[transform:none] origin-center mx-auto my-[calc((100vw-32px-50vh)/2)] md:my-[calc((100vw-64px-500px)/2)] lg:my-0">
                {items.map((num) => {
                    const player = playerPositions[num];

                    return (
                        <div key={num} className="flex items-center justify-center text-[#1c1c1c] p-0.5 md:p-1">
                            {/* Peletakan pemain */}
                            {player ? (
                                <span className="bg-[#f5f5f5] rounded shadow font-bold flex flex-col items-stretch [transform:rotate(90deg)] lg:flex-row lg:items-stretch lg:[transform:none] lg:w-[150px] lg:h-auto text-[8px] md:text-xs h-[48px] w-[55px] md:h-[70px] md:w-[85px]">
                                    <span className="px-0.5 md:px-2 py-0.5 md:py-1 flex items-center justify-center lg:justify-start">{player.number}</span>
                                    <span className="h-px lg:w-px bg-gray-300"></span>
                                    <span className="px-0.5 md:px-2 py-0.5 md:py-1 flex items-center justify-center lg:justify-start flex-1 min-w-0 truncate">{player.name}</span>
                                    {player.isCaptain && <span className="text-yellow-600 font-bold flex items-center justify-center lg:justify-start px-0.5">(C)</span>}
                                    {player.subMinute && (
                                        <span className="flex items-center justify-center lg:ml-auto px-0.5 py-0.5">
                                            <ArrowDown size={10} className="text-red-500 shrink-0" />
                                            <span>{player.subMinute}'</span>
                                        </span>
                                    )}
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="bg-[#f5f5f5] max-w-5xl my-2 border border-[#1c1c1c]">
                {/* Mobile: List cadangan */}
                <div className="flex flex-col lg:hidden">
                    <div className="border-b px-2.5 py-1.5">
                        <span className="text-xs font-bold text-[#1c1c1c]">Pemain Cadangan:</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-b flex items-center justify-start gap-x-1.5">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(60)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">R. Sanjaya</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 27</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-b flex items-center justify-start gap-x-1.5">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(72)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">S. Wibowo</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 20</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-b flex items-center justify-start gap-x-1.5">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(72)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">M. Iqbal</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 26</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-b flex items-center justify-start gap-x-1.5">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(80)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">F. Fadilah</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 25</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-b flex items-center justify-start gap-x-1.5">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(80)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">H. Saputro</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 24</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full flex items-center justify-start gap-x-3">
                        <span className="text-xs text-[#1c1c1c] font-bold">Player 11</span>
                        <span className="text-xs text-[#1c1c1c] font-bold">Player 13</span>
                        <span className="text-xs text-[#1c1c1c] font-bold">Player 14</span>
                        <span className="text-xs text-[#1c1c1c] font-bold">Player 15</span>
                    </div>
                </div>
                {/* PC: list cadangan */}
                <div className="hidden lg:grid lg:grid-cols-5">
                    <div className="col-span-5 border-b px-2.5 py-1">
                        <span className="text-xs font-bold text-[#1c1c1c]">Pemain Cadangan:</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-r border-b flex items-center justify-center gap-x-1">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(60)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">R. Sanjaya</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 27</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-r border-b flex items-center justify-center gap-x-1">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(72)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">S. Wibowo</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 20</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-r border-b flex items-center justify-center gap-x-1">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(72)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">M. Iqbal</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 26</span>
                    </div>
                    <div className="px-2.5 py-2 overflow-hidden w-full border-r border-b flex items-center justify-center gap-x-1">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(80)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">F. Fadilah</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 25</span>
                    </div>
                    <div className="border-b px-2.5 py-2 overflow-hidden w-full flex items-center justify-center gap-x-1">
                        <span className="text-xs text-[#1c1c1c] font-bold shrink-0">(80)'</span>
                        <span className="text-xs text-red-500 font-bold truncate">H. Saputro</span>
                        <ArrowUpDown size={14} className="text-[#1c1c1c] shrink-0" />
                        <span className="text-xs text-[#0f7a4a] font-bold truncate">Player 24</span>
                    </div>
                    <span className="text-xs text-[#1c1c1c] font-bold px-3 md:px-4 border-r border-[#1c1c1c] last:border-r-0">TERENS OWANG PRISKA PUHIRI
                    </span>
                    <span className="text-xs text-[#1c1c1c] font-bold px-3 md:px-4 border-r border-[#1c1c1c] last:border-r-0">Player 13</span>
                    <span className="text-xs text-[#1c1c1c] font-bold px-3 md:px-4 border-r border-[#1c1c1c] last:border-r-0">Player 14</span>
                    <span className="text-xs text-[#1c1c1c] font-bold px-3 md:px-4 border-r border-[#1c1c1c] last:border-r-0">Player 15</span>
                </div>
            </div>
        </div>
    );
}
