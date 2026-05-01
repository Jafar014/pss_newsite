import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
        excerpt:
            'Gol-gol indah dari pemain PSS Sleman membawa tim meraih kemenangan 3-0 di kandang lawan.',
        category: 'Match Report',
        date: '28 Apr 2026',
        image: 'https://picsum.photos/600/400?random=1',
    },
    {
        id: 2,
        title: 'Persiapan Jelang Derby: Tim Berlatih di Stadion Utama',
        excerpt:
            'Seluruh skuad menjalani latihan intensif untuk mempersiapkan laga derby minggu depan.',
        category: 'Training',
        date: '27 Apr 2026',
        image: 'https://picsum.photos/600/400?random=2',
    },
    {
        id: 3,
        title: 'Pemain Baru Resmi Bergabung di PSS Sleman',
        excerpt:
            'Manajemen mengumumkan perekrutan pemain anyar untuk memperkuat lini tengah tim.',
        category: 'Transfer',
        date: '26 Apr 2026',
        image: 'https://picsum.photos/600/400?random=3',
    },
    {
        id: 4,
        title: 'Analisis Taktik: Formasi 4-3-3 Pilihan Pelatih',
        excerpt:
            'Pelatih PSS Sleman mengandalkan formasi 4-3-3 dalam beberapa laga terakhir.',
        category: 'Analysis',
        date: '25 Apr 2026',
        image: 'https://picsum.photos/600/400?random=4',
    },
    {
        id: 5,
        title: 'Suporter PSS Sleman Pecahkan Rekor Kehadiran',
        excerpt:
            'Lebih dari 30.000 suporter memadati stadion untuk mendukung tim kesayangan.',
        category: 'Fans',
        date: '24 Apr 2026',
        image: 'https://picsum.photos/600/400?random=5',
    },
    {
        id: 6,
        title: 'Akademi Muda PSS Sleman Raih Prestasi Gemilang',
        excerpt:
            'Tim U20 PSS Sleman berhasil meraih gelar juara turnamen nasional.',
        category: 'Youth',
        date: '23 Apr 2026',
        image: 'https://picsum.photos/600/400?random=6',
    },
    {
        id: 7,
        title: 'Cedera Pemain Kunci: Dampaknya Terhadap Strategi Tim',
        excerpt:
            'Tim medis masih mengevaluasi kondisi pemain yang mengalami cedera saat latihan.',
        category: 'News',
        date: '22 Apr 2026',
        image: 'https://picsum.photos/600/400?random=7',
    },
    {
        id: 8,
        title: 'Sponsor Baru: Kerjasama Strategis dengan Brand Nasional',
        excerpt:
            'PSS Slemen mengumumkan kerjasama dengan sponsor baru untuk mendukung operasional klub.',
        category: 'News',
        date: '21 Apr 2026',
        image: 'https://picsum.photos/600/400?random=8',
    },
];

const ITEMS_PER_PAGE = 6;

export default function NewsContent() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
    const paginatedNews = newsData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    return (
        <>
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0F7A4A]/20" />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <h1 className="font-calcio-italiano text-4xl font-bold tracking-wider text-white uppercase md:text-6xl lg:text-7xl">
                        Berita
                    </h1>
                    <div className="mt-4 h-1 w-24 bg-[#0F7A4A]" />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-16 pt-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedNews.map((news) => (
                        <Link
                            key={news.id}
                            href={`/berita/${news.id}`}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-lg bg-gray-900">
                                <div className="aspect-[3/2] overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="mb-2 flex items-center gap-3">
                                        <span className="rounded-full bg-[#0F7A4A] px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                                            {news.category}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {news.date}
                                        </span>
                                    </div>
                                    <h3 className="text-lg leading-tight font-bold text-white transition-colors group-hover:text-[#0F7A4A]">
                                        {news.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                                        {news.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-10 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#0F7A4A] hover:bg-[#0F7A4A]"
                        >
                            Sebelumnya
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                    currentPage === page
                                        ? 'bg-[#0F7A4A] text-white'
                                        : 'border border-white/20 text-white hover:border-[#0F7A4A] hover:bg-[#0F7A4A]'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#0F7A4A] hover:bg-[#0F7A4A]"
                        >
                            Selanjutnya
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
