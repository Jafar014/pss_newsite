export default function StoreHeader() {
    return(
        <>
            {/* Header section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-16">
                    <h2 className="font-calcio-italiano mb-8 text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Koleksi Toko
                    </h2>
                </div>
            </div>
        </>
    );
}