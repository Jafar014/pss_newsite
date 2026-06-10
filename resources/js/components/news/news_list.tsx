import { Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

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
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-12 md:py-16">
                    <h2 className="font-calcio-italiano mb-4 md:mb-8 text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white uppercase text-center px-4">Berita Terbaru
                    </h2>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:pt-10">
                <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2">
                    {paginatedNews.map((news) => (
                        <Link
                            key={news.id}
                            href={`/berita/${news.id}`}
                            className="group cursor-pointer"
                        >
                            <div className="flex flex-col border-b-2 border-b-[#0f7a4a] pb-4">
                                <div className="relative w-full aspect-video overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <span className="rounded-full bg-[#0F7A4A] px-2.5 py-0.5 text-[10px] md:text-xs font-bold text-white uppercase">
                                        {news.category}
                                    </span>
                                    <span className="text-[10px] md:text-xs text-gray-400">
                                        {news.date}
                                    </span>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-sm md:text-lg leading-tight font-bold text-[#1c1c1c] transition-colors group-hover:text-[#0F7A4A]">
                                        {news.title}
                                    </h3>
                                    <p className="line-clamp-2 text-[10px] md:text-sm text-gray-400 mt-1">
                                        {news.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {totalPages > 1 && (
                    <Pagination className="mt-10">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                    text="Sebelumnya"
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        onClick={() => setCurrentPage(page)}
                                        className="cursor-pointer"
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                    text="Selanjutnya"
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </>
    );
}
