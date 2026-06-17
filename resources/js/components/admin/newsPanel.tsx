import { router } from "@inertiajs/react";
import { Plus, Search, Pencil, Trash2, Archive } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    category: string | null;
    status: string;
    views: number;
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

function statusBadge(status: string) {
    switch (status) {
        case 'published':
            return <span className="inline-block bg-green-100 text-green-700 font-medium px-2.5 py-0.5 rounded-full text-xs">Published</span>;
        case 'draft':
            return <span className="inline-block bg-yellow-100 text-yellow-700 font-medium px-2.5 py-0.5 rounded-full text-xs">Draft</span>;
        case 'archived':
            return <span className="inline-block bg-gray-200 text-gray-600 font-medium px-2.5 py-0.5 rounded-full text-xs">Archived</span>;
        default:
            return <span className="inline-block bg-gray-100 text-gray-500 font-medium px-2.5 py-0.5 rounded-full text-xs">{status}</span>;
    }
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function NewsPanel({ news }: { news: NewsPaginated }) {
    return (
        <>
            {/* Header panel */}
            <h1 className="text-2xl font-semibold mb-4 text-[#1c1c1c]">Manajemen Berita</h1>

            {/* Toolbar */}
            <div className="flex items-center gap-1 mt-8">
                {/* Search and filter section */}
                <div className="relative flex-1 max-w-full">
                    <input
                        type="text"
                        placeholder="Cari berita..."
                        className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                </div>
                <select className="w-40 h-12 rounded-md border border-[#1c1c1c]/20 text-[#1c1c1c] bg-[#f5f5f5] px-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent">
                    <option value="all">Semua Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                </select>
                {/* Button: Tambah Berita */}
                <button className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto">
                    <Plus className="size-4 " />
                    Tambah Berita
                </button>
            </div>

            {/* Tabel Berita */}
            <div className="relative mt-4 rounded-md overflow-hidden h-100">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-[#0f7a4a]/15 text-left">
                        <tr>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Judul</th>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Kategori</th>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Status</th>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Tanggal Publikasi</th>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Views</th>
                            <th className=" px-4 py-3 text-sm font-medium text-[#1c1c1c]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.data.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                    Tidak ada berita
                                </td>
                            </tr>
                        ) : (
                            news.data.map((item: NewsItem) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.title}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.category || '-'}</td>
                                    <td className="px-4 py-3 text-sm">{statusBadge(item.status)}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.published_at ? formatDate(item.published_at) : '-'}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.views}</td>
                                    <td className="px-4 py-3 text-sm ">
                                        <button className="bg-[#efbf04] text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer" title="Edit">
                                            <Pencil className="size-4" />
                                        </button>
                                        <button className="bg-[#1c1c1c]/40 text-[#f5f5f5] rounded-md p-2.5 ml-2 shadow-sm hover:bg-[#1c1c1c]/60 transition-colors cursor-pointer" title="Archive">
                                            <Archive className="size-4" />
                                        </button>
                                        <button className="bg-red-600 text-[f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-red-700 transition-colors ml-2 cursor-pointer" title="Hapus">
                                            <Trash2 className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {news.last_page > 1 && (
                <div className="flex flex-col items-center gap-2 mt-4">
                    <Pagination>
                        <PaginationContent>
                            {news.links.map((link, i) => {
                                if (link.label.includes('Previous')) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationPrevious
                                                href={link.url || undefined}
                                                onClick={(e) => { e.preventDefault(); link.url && router.get(link.url); }}
                                                className={!link.url ? 'pointer-events-none opacity-50' : ''}
                                                text="Previous"
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
                                                className={!link.url ? 'pointer-events-none opacity-50' : ''}
                                                text="Next"
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
                    <p className="text-sm text-[#1c1c1c]/60">
                        Menampilkan {news.from}–{news.to} dari {news.total} berita
                    </p>
                </div>
            )}
        </>
    );
}