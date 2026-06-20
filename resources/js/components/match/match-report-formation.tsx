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



export default function MatchReportFormation({ fixture }: MatchReportFormationProps) {
    return (
        <div className="w-full h-full px-4 lg:px-8 pt-4 md:pt-8 pb-4">
            <div className="pb-8">
                <h1 className="text-2xl sm:text-4xl md:text-5xl text-center font-calcio-italiano italic text-[#1c1c1c] tracking-wide drop-shadow-sm">LINE UP vs. PERSEBAYA</h1>
            </div>
            <div className="w-full bg-[#f5f5f5] rounded-xl shadow-md border border-gray-200/80 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="w-full flex flex-col border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-[#1c1c1c]">
                    <div className="">
                        <p className="text-center text-sm font-bold tracking-widest uppercase text-[#f5f5f5] bg-[#0f7a4a] py-3">Starting</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">1</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">2</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">3</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">4</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">5</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">6</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">7</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">8</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">9</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">10</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>            
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">11</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="">
                        <p className="text-center text-sm font-bold tracking-widest uppercase text-white bg-[#0f7a4a] py-3">Cadangan</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">12</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">13</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">14</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">15</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">16</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">17</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">18</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">19</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">20</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">21</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] bg-[#f5f5f5] p-3 sm:p-4 w-12 sm:w-16 text-center shrink-0 border-r">22</p>
                            <p className="text-base sm:text-2xl font-calcio-italiano text-[#1c1c1c] p-3 sm:p-4 w-full">GOALKEEPER</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200/80 p-4 text-center">
                <p className="text-lg sm:text-2xl font-calcio-italiano tracking-widest uppercase text-[#1c1c1c]/60">Pelatih: <span className="text-[#1c1c1c]">BOJAN HODAK</span></p>
            </div>
        </div>
        
    </div>
    );
}
