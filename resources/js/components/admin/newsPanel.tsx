import { router, usePage } from "@inertiajs/react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    thumbnail: string | null;
    category: string | null;
    author: string | null;
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
    const { errors } = usePage().props;
    const [editing, setEditing] = useState<NewsItem | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<NewsItem | null>(null);
    const [form, setForm] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        thumbnail: '',
        category: '',
        author: '',
        status: 'draft',
        published_at: '',
    });

    function resetForm() {
        setForm({
            title: '',
            slug: '',
            content: '',
            excerpt: '',
            thumbnail: '',
            category: '',
            author: '',
            status: 'draft',
            published_at: '',
        });
        setEditing(null);
        setDialogOpen(false);
    }

    function openEdit(item: NewsItem) {
        setEditing(item);
        setForm({
            title: item.title,
            slug: item.slug,
            content: item.content,
            excerpt: item.excerpt || '',
            thumbnail: item.thumbnail || '',
            category: item.category || '',
            author: item.author || '',
            status: item.status,
            published_at: item.published_at ? item.published_at.slice(0, 16) : '',
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (editing) {
            router.put(`/admin/berita/${editing.id}`, form, {
                onSuccess: () => resetForm(),
            });
        } else {
            router.post('/admin/berita', form, {
                onSuccess: () => resetForm(),
            });
        }
    }

    function handleDelete(id: number) {
        router.delete(`/admin/berita/${id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    function confirmDelete(item: NewsItem) {
        setDeleteTarget(item);
    }

    return (
        <>
            <div className="w-full">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Manajemen Berita</h1>

                {/* Toolbar */}
                <div className="flex items-center gap-1 mt-8">
                    <div className="relative flex-1 max-w-full">
                        <input
                            type="text"
                            placeholder="Cari berita..."
                            className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#1c1c1c]/40" />
                    </div>

                    <button
                        onClick={() => { resetForm(); setDialogOpen(true); }}
                        className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto"
                    >
                        <Plus className="size-4" />
                        Tambah Berita
                    </button>

                    {/* Form Dialog */}
                    <Dialog open={dialogOpen} onOpenChange={(open) => { if (!open) resetForm(); }}>
                        <DialogContent className="sm:max-w-2xl bg-[#f5f5f5] border-0 p-0 gap-0">
                            <div className="px-6 py-4 border-b border-[#1c1c1c]/10">
                                <DialogTitle className="text-lg font-semibold text-[#1c1c1c]">{editing ? 'Edit Berita' : 'Tambah Berita'}</DialogTitle>
                            </div>
                            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Judul</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.title}
                                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Slug</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.slug}
                                            onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                        {errors.slug && (
                                            <p className="text-sm text-red-600 mt-1">{errors.slug}</p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Konten</label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={form.content}
                                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                                            className="w-full px-3 py-2 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all resize-y"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Excerpt</label>
                                        <textarea
                                            rows={2}
                                            value={form.excerpt}
                                            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                            className="w-full px-3 py-2 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all resize-y"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Kategori</label>
                                        <input
                                            type="text"
                                            value={form.category}
                                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Penulis</label>
                                        <input
                                            type="text"
                                            value={form.author}
                                            onChange={(e) => setForm({ ...form, author: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Status</label>
                                        <select
                                            value={form.status}
                                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Tanggal Publikasi</label>
                                        <input
                                            type="datetime-local"
                                            value={form.published_at}
                                            onChange={(e) => setForm({ ...form, published_at: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Thumbnail URL</label>
                                        <input
                                            type="text"
                                            value={form.thumbnail}
                                            onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 pt-2 border-t border-[#1c1c1c]/10">
                                    <DialogClose asChild>
                                        <button type="button" className="px-5 py-2.5 text-sm font-medium rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-[#1c1c1c] hover:bg-[#1c1c1c]/5 transition-colors cursor-pointer">
                                            Batal
                                        </button>
                                    </DialogClose>
                                    <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#f5f5f5] bg-[#0f7a4a] hover:bg-[#0c6239] rounded-lg transition-colors cursor-pointer shadow-xs">
                                        {editing ? 'Simpan' : 'Tambah'}
                                    </button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Tabel */}
                <div className="relative mt-4 rounded-md overflow-hidden">
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-[#0f7a4a]/15 text-left">
                            <tr>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Judul</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Kategori</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Status</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Tanggal Publikasi</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Views</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Aksi</th>
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
                                        <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => { openEdit(item); setDialogOpen(true); }}
                                                className="bg-[#efbf04] text-white rounded-md p-2.5 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer"
                                                title="Edit"
                                            >
                                                <Pencil className="size-4" />
                                            </button>
                                            <button
                                                onClick={() => confirmDelete(item)}
                                                className="bg-red-600 text-white rounded-md p-2.5 shadow-sm hover:bg-red-700 transition-colors ml-2 cursor-pointer"
                                                title="Hapus"
                                            >
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

                {/* Delete Confirmation */}
                <Dialog open={!!deleteTarget} onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}>
                    <DialogContent className="sm:max-w-sm bg-[#f5f5f5] border-0 p-0 gap-0">
                        <div className="px-6 py-4 border-b border-[#1c1c1c]/10">
                            <DialogTitle className="text-lg font-semibold text-[#1c1c1c]">Konfirmasi Hapus</DialogTitle>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-[#1c1c1c]/70">
                                Apakah Anda yakin ingin menghapus <span className="font-semibold text-[#1c1c1c]">{deleteTarget?.title}</span>?
                            </p>
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#1c1c1c]/10">
                                <DialogClose asChild>
                                    <button type="button" className="px-5 py-2.5 text-sm font-medium rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-[#1c1c1c] hover:bg-[#1c1c1c]/5 transition-colors cursor-pointer">
                                        Batal
                                    </button>
                                </DialogClose>
                                <button
                                    onClick={() => deleteTarget && handleDelete(deleteTarget.id)}
                                    className="px-5 py-2.5 text-sm font-medium text-[#f5f5f5] bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
