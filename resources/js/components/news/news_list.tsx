import { Link, router } from '@inertiajs/react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    thumbnail: string | null;
    category: string | null;
    status: string;
    published_at: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface NewsPaginated {
    data: NewsItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function NewsContent({ news }: { news: NewsPaginated }) {
    return (
        <div className="flex flex-col flex-1">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-10 sm:py-12 md:py-14 lg:py-16">
                    <h2 className="font-calcio-italiano mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-white uppercase text-center px-4">Berita Terbaru
                    </h2>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-4 lg:px-6 xl:px-8 pb-12 sm:pb-16 pt-6 sm:pt-8 md:pt-10 flex flex-col flex-1">
                <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {news.data.length === 0 ? (
                        <div className="col-span-full text-center py-20 text-[#1c1c1c]/60 text-sm">
                            Belum ada berita
                        </div>
                    ) : (
                        news.data.filter((item: NewsItem) => item.status === 'published').map((item: NewsItem) => (
                            <Link
                                key={item.id}
                                href={`/berita/${item.slug}`}
                                className="group cursor-pointer"
                            >
                                <div className="flex flex-col h-full border border-[#e5e5e5] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
                                        <img
                                            src={item.thumbnail || 'https://picsum.photos/600/400?random=' + item.id}
                                            alt={item.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between min-h-[200px] sm:min-h-[260px] md:min-h-[300px] p-4 sm:p-5 md:p-6">
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg line-clamp-3 sm:line-clamp-4 leading-snug font-bold text-[#1c1c1c] transition-colors group-hover:text-[#0F7A4A]">
                                            {item.title}
                                        </h3>

                                        {item.excerpt && (
                                            <p className="text-xs sm:text-sm md:text-base text-[#1c1c1c]/60 line-clamp-2 sm:line-clamp-3 mt-1.5 sm:mt-2 leading-relaxed">
                                                {item.excerpt}
                                            </p>
                                        )}

                                        <div className="flex items-end justify-between gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#e5e5e5]">
                                            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-[#0F7A4A] uppercase">
                                                {item.category || 'Berita'}
                                            </span>
                                            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400">
                                                {item.published_at ? formatDate(item.published_at) : '-'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                <div className="flex-1" />

                {news.last_page > 1 && (
                    <Pagination className="mt-10">
                        <PaginationContent>
                            {news.links.map((link, i) => {
                                if (link.label.includes('Previous')) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationPrevious
                                                href={link.url || undefined}
                                                onClick={(e) => { e.preventDefault(); link.url && router.get(link.url); }}
                                                className={!link.url ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                                text="Sebelumnya"
                                            />
                                        </PaginationItem>
                                    );
                                }
                                if (link.label.includes('Next')) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationNext
                                                href={link.url || undefined}
                                                onClick={(e) => { e.preventDefault(); link.url && router.get(link.url); }}
                                                className={!link.url ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                                text="Selanjutnya"
                                            />
                                        </PaginationItem>
                                    );
                                }
                                if (link.label === '...') {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    );
                                }
                                return (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            href={link.url || undefined}
                                            onClick={(e) => { e.preventDefault(); link.url && router.get(link.url); }}
                                            isActive={link.active}
                                        >
                                            {link.label}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </div>
    );
}
