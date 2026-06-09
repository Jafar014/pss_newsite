export default function SubGalleryHeader() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:py-16">
                <h2 className="font-calcio-italiano text-4xl md:text-7xl text-white uppercase overflow-hidden whitespace-nowrap text-center">Matchday X:</h2>
                <h2 className="font-calcio-italiano text-3xl md:text-6xl text-white uppercase overflow-hidden whitespace-nowrap text-center"> vs. Opponent
                </h2>
            </div>
        </div>
    );
}
