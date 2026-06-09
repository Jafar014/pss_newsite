export default function GalleryListHeader() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:px-0 md:py-16">
                <h2 className="font-calcio-italiano mb-4 md:mb-8 text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">
                    Galeri
                </h2>
            </div>
        </div>
    );
}