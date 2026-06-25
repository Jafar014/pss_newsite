function formatDate(dateString: string | null) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function SubNewsHeader({ news }: { news: { title: string; category: string | null; published_at: string | null } }) {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center py-10 md:py-16 px-4">
                <h2 className="font-calcio-italiano text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white uppercase text-center">{news.title}
                </h2>
                <p className="font-calcio-italiano text-sm sm:text-base md:text-2xl text-white/90 mt-2">{formatDate(news.published_at)}</p>
                <p className="font-calcio-italiano text-xs sm:text-sm md:text-xl text-white/80">Kategori: {news.category || '-'}</p>
            </div>
        </div>
    );
}