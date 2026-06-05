export default function SubNewsHeader() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center py-16">
                <h2 className="font-calcio-italiano text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Judul Berita
                </h2>
                <p className="font-calcio-italiano text-2xl">Tanggal dan Tempat</p>
                <p className="font-calcio-italiano text-xl">Kategori: XXXXX</p>
            </div>
        </div>
    );
}