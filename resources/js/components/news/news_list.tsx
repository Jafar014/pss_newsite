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
        image: '../../half_body.jpg',
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
        {/* Header section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-16">
                    <h2 className="font-calcio-italiano mb-8 text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Berita Terbaru
                    </h2>
                </div>
            </div>
        {/* Grid News Section */}
            <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 ">
                
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
                    {paginatedNews.map((news) =>(
                        <Link
                            key={news.id}
                            href={`/berita/${news.id}`}
                            className="group cursor-pointer"
                        >
                            {/* Gambar berita */}
                            <div className="w-full grid grid-rows-3 h-[50.5vh] mx-auto border-b-2 my-2 border-b-[#0f7a4a]">
                                <div className="relative w-full h-[30vh] ">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Kategori berita dan tanggal rilis */}
                                <div className="w-full overflow-hidden h-[6vh]  mt-26">
                                    <div className="justify-start items-center my-3 mx-4 flex gap-3">
                                        <span className="rounded-full bg-[#0F7A4A] px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                                            {news.category}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {news.date}
                                        </span>
                                    </div>
                                </div>
                                {/* Judul Berita dan deskripsi singkat */}
                                <div className="w-full grid h-[14vh] mt-4 p-3">
                                    <h3 className="text-lg leading-tight font-bold text-[#1c1c1c] transition-colors group-hover:text-[#0F7A4A] mt-1">
                                        {news.title}
                                    </h3>
                                    <p className="line-clamp-2 text-sm text-gray-400 mb-2">
                                        {news.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                
                {/* Pagination  */}
                {totalPages > 1 && (
                    <div className="mt-10 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="rounded-lg border border-[#1c1c1c] px-3 py-1.5 text-sm text-[#1c1c1c] transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#0F7A4A] hover:bg-[#0F7A4A]"
                        >
                            Sebelumnya
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                                    currentPage === page
                                        ? 'bg-[#0F7A4A] text-[#f5f5f5]'
                                        : 'border border-[#1c1c1c] text-[#0f7a4a] hover:text-[#f5f5f5] hover:bg-[#0F7A4A]'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="rounded-lg border border-[#1c1c1c] px-3 py-1.5 text-sm text-[#1c1c1c] transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:text-[#f5f5f5] hover:bg-[#0F7A4A] cursor-pointer"
                        >
                            Selanjutnya
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
