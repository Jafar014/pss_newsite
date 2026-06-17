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
                <div className="relative z-10 flex flex-col items-center justify-center py-10 sm:py-12 md:py-14 lg:py-16">
                    <h2 className="font-calcio-italiano mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-white uppercase text-center px-4">Berita Terbaru
                    </h2>
                </div>
            </div>

            <div className="mx-auto max-w-[1440px] px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-16 pt-6 sm:pt-8 md:pt-10">
                <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {paginatedNews.map((news) => (
                        <Link
                            key={news.id}
                            href={`/berita/${news.id}`}
                            className="group cursor-pointer"
                        >
                            <div className="flex flex-col h-full border border-[#e5e5e5] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col justify-between min-h-[200px] sm:min-h-[260px] md:min-h-[300px] p-4 sm:p-5 md:p-6">
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg line-clamp-3 sm:line-clamp-4 leading-snug font-bold text-[#1c1c1c] transition-colors group-hover:text-[#0F7A4A]">
                                        {news.title}
                                    </h3>

                                    <div className="flex items-end justify-between gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#e5e5e5]">
                                        <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#0F7A4A] uppercase">
                                            {news.category}
                                        </span>
                                        <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400">
                                            {news.date}
                                        </span>
                                    </div>
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
