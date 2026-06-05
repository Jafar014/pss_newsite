interface MatchReportHeaderProps {
    fixture: string;
}

export default function MatchReportHeader({ fixture }: MatchReportHeaderProps) {
    return (
        <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1c1c1c]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-8">
                    <h2 className="font-calcio-italiano text-5xl text-white uppercase  overflow-hidden whitespace-nowrap text-center">Rekap Pertandingan</h2>
                    <h2 className="font-calcio-italiano text-5xl text-white uppercase  overflow-hidden whitespace-nowrap text-center">Pekan x
                    </h2>
                </div>
        </div>
    );
}
