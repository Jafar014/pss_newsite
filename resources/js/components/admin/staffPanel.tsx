import { Search, Plus, Pencil, Trash2 } from "lucide-react";
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
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { router } from "@inertiajs/react";

interface StaffItem {
    id: number;
    team_id: number;
    full_name: string;
    role: string;
    photo_url: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface StaffPaginated {
    data: StaffItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

export default function StaffPanel({ staff }: { staff: StaffPaginated }) {
    const [editing, setEditing] = useState<StaffItem | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<StaffItem | null>(null);
    const [form, setForm] = useState({
        full_name: '',
        role: '',
        photo_url: '',
    });

    function resetForm() {
        setForm({
            full_name: '',
            role: '',
            photo_url: '',
        });
        setEditing(null);
        setDialogOpen(false);
    }

    function openEdit(item: StaffItem) {
        setEditing(item);
        setForm({
            full_name: item.full_name,
            role: item.role || '',
            photo_url: item.photo_url || '',
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const payload = {
            ...form,
        };

        if (editing) {
            router.put(`/admin/staff/${editing.id}`, payload, {
                onSuccess: () => resetForm(),
            });
        } else {
            router.post('/admin/staff', payload, {
                onSuccess: () => resetForm(),
            });
        }
    }

    function handleDelete(id: number) {
        router.delete(`/admin/staff/${id}`, {
            onSuccess: () => setDeleteTarget(null),
        });
    }

    function confirmDelete(item: StaffItem) {
        setDeleteTarget(item);
    }

    return (
        <>
            <div className="w-full">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Staff Klub</h1>

                {/* Toolbar */}
                <div className="flex items-center gap-1 mt-8">
                    <div className="relative flex-1 max-w-full">
                        <input
                            type="text"
                            placeholder="Cari staff..."
                            className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#1c1c1c]/40" />
                    </div>

                    <button
                        onClick={() => { resetForm(); setDialogOpen(true); }}
                        className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto"
                    >
                        <Plus className="size-4" />
                        Tambah Staff
                    </button>

                    <Dialog open={dialogOpen} onOpenChange={(open) => { if (!open) resetForm(); }}>
                        <DialogContent className="sm:max-w-xl bg-[#f5f5f5] border-0 p-0 gap-0">
                            <div className="px-6 py-4 border-b border-[#1c1c1c]/10">
                                <DialogTitle className="text-lg font-semibold text-[#1c1c1c]">{editing ? 'Edit Staff' : 'Tambah Staff'}</DialogTitle>
                            </div>
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.full_name}
                                            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Role</label>
                                        <input
                                            type="text"
                                            value={form.role}
                                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                                            className="w-full h-10 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-[#1c1c1c]/70 mb-1.5">Foto URL</label>
                                        <input
                                            type="text"
                                            value={form.photo_url}
                                            onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
                                            className="w-full h-12 px-3 rounded-lg border border-[#1c1c1c]/15 bg-[#f5f5f5] text-sm text-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]/30 focus:border-[#0f7a4a] transition-all"
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
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Nama</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Role</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.data.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                        Tidak ada staff
                                    </td>
                                </tr>
                            ) : (
                                staff.data.map((item: StaffItem) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-3 text-sm">
                                            <div className="flex items-center gap-3">
                                                {item.photo_url ? (
                                                    <img src={item.photo_url} alt={item.full_name} className="size-8 rounded-full object-cover shrink-0" />
                                                ) : (
                                                    <div className="size-8 rounded-full bg-[#1c1c1c]/10 shrink-0" />
                                                )}
                                                <span className="text-[#1c1c1c]">{item.full_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.role || '-'}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => { openEdit(item); setDialogOpen(true); }}
                                                className="bg-[#efbf04] text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer"
                                                title="Edit"
                                            >
                                                <Pencil className="size-4" />
                                            </button>
                                            <button
                                                onClick={() => confirmDelete(item)}
                                                className="bg-red-600 text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-red-700 transition-colors ml-2 cursor-pointer"
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
                {staff.last_page > 1 && (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <Pagination>
                            <PaginationContent>
                                {staff.links.map((link, i) => {
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
                            Menampilkan {staff.from}–{staff.to} dari {staff.total} staff
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
                                Apakah Anda yakin ingin menghapus <span className="font-semibold text-[#1c1c1c]">{deleteTarget?.full_name}</span>?
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
