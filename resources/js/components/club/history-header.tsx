export default function HistoryHeader() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:px-0 md:py-16">
                <h2 className="font-calcio-italiano mb-3 text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white text-center leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
                    PSS SLEMAN
                </h2>
                <p className="text-base font-light italic text-white md:text-xl">
                    Super Elang Jawa
                </p>
            </div>
        </div>
    );
}