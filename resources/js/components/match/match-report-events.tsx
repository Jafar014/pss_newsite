import { Goal, AlertTriangle, IdCardIcon, Box, PlaySquare, RectangleHorizontal, RectangleVertical, Square, Circle, Volleyball, PanelTop } from "lucide-react";


interface MatchReportEventsProps {
    fixture: string;
}

const events: { type: "goal" | "yellow" | "red"; minute: string; player: string }[] = [
    { type: "goal", minute: "23'", player: "K. Jefri" },
    { type: "goal", minute: "45+2'", player: "A. Nugroho" },
    { type: "yellow", minute: "55'", player: "B. Pahlevi" },
    { type: "goal", minute: "78'", player: "D. Pratama" },
    { type: "yellow", minute: "85'", player: "A. Syahputra" },
];

export default function MatchReportEvents({ fixture }: MatchReportEventsProps) {
    return (
        <div className="w-full px-4 lg:px-0 pb-6 md:pb-8 lg:pr-8">
            <span className="text-[#1c1c1c] text-lg md:text-xl font-calcio-italiano">Match Events</span>
            <div className="w-full mt-2 border border-[#1c1c1c] bg-[#f5f5f5]">
                <div className="px-2.5 py-1.5 border-b border-[#1c1c1c] bg-[#1c1c1c]">
                    <span className="text-xs font-bold text-[#f5f5f5]">PSS Sleman</span>
                </div>
                {events.map((event, i) => (
                    <div key={i} className="flex items-center gap-2 px-2.5 py-1 border-b border-[#1c1c1c] last:border-b-0">
                        {event.type === "goal" && <Volleyball size={14} className="text-[#1c1c1c] shrink-0" />}
                        {event.type === "yellow" && <RectangleVertical size={14} className="bg-yellow-500 shrink-0" />}
                        {event.type === "red" && <RectangleVertical size={14} className="text-red-600 shrink-0" />}
                        <span className="text-xs text-[#1c1c1c] font-bold w-[30px] shrink-0">{event.minute}</span>
                        <span className="text-xs text-[#1c1c1c]">{event.player}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
