import { router } from "@inertiajs/react";
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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";

interface PlayerItem {
    id: number;
    team_id: number;
    full_name: string;
    jersey_number: number | null;
    position: string | null;
    goals: number;
    assists: number;
    age: number | null;
    country: string | null;
    photo_url: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PlayerPaginated {
    data: PlayerItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

export default function PlayerPanel({ pemain }: { pemain: PlayerPaginated }) {
    const [editing, setEditing] = useState<PlayerItem | null>(null);
    const [form, setForm] = useState({
        team_id: '',
        full_name: '',
        jersey_number: '',
        position: '',
        goals: '0',
        assists: '0',
        age: '',
        country: '',
        photo_url: '',
    });

    function resetForm() {
        setForm({
            team_id: '',
            full_name: '',
            jersey_number: '',
            position: '',
            goals: '0',
            assists: '0',
            age: '',
            country: '',
            photo_url: '',
        });
        setEditing(null);
    }

    function openEdit(player: PlayerItem) {
        setEditing(player);
        setForm({
            team_id: String(player.team_id),
            full_name: player.full_name,
            jersey_number: player.jersey_number ? String(player.jersey_number) : '',
            position: player.position || '',
            goals: String(player.goals),
            assists: String(player.assists),
            age: player.age ? String(player.age) : '',
            country: player.country || '',
            photo_url: player.photo_url || '',
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const payload = {
            ...form,
            team_id: Number(form.team_id),
            jersey_number: form.jersey_number ? Number(form.jersey_number) : null,
            goals: Number(form.goals),
            assists: Number(form.assists),
            age: form.age ? Number(form.age) : null,
        };

        if (editing) {
            router.put(`/admin/pemain/${editing.id}`, payload, {
                onSuccess: () => resetForm(),
            });
        } else {
            router.post('/admin/pemain', payload, {
                onSuccess: () => resetForm(),
            });
        }
    }

    function handleDelete(id: number) {
        if (confirm('Hapus pemain ini?')) {
            router.delete(`/admin/pemain/${id}`);
        }
    }

    return (
        <>
            <div className="w-full">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Manajemen Pemain</h1>

                {/* Toolbar */}
                <div className="flex items-center gap-1 mt-8">
                    <div className="relative flex-1 max-w-full">
                        <input
                            type="text"
                            placeholder="Cari pemain..."
                            className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    </div>

                    <Dialog onOpenChange={(open) => { if (!open) resetForm(); }}>
                        <DialogTrigger asChild>
                            <button className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto">
                                <Plus className="size-4" />
                                Tambah Pemain
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>{editing ? 'Edit Pemain' : 'Tambah Pemain'}</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.full_name}
                                            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">No Punggung</label>
                                        <input
                                            type="number"
                                            value={form.jersey_number}
                                            onChange={(e) => setForm({ ...form, jersey_number: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Posisi</label>
                                        <input
                                            type="text"
                                            value={form.position}
                                            onChange={(e) => setForm({ ...form, position: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Usia</label>
                                        <input
                                            type="number"
                                            value={form.age}
                                            onChange={(e) => setForm({ ...form, age: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Gol</label>
                                        <input
                                            type="number"
                                            value={form.goals}
                                            onChange={(e) => setForm({ ...form, goals: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Assist</label>
                                        <input
                                            type="number"
                                            value={form.assists}
                                            onChange={(e) => setForm({ ...form, assists: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Negara</label>
                                        <input
                                            type="text"
                                            value={form.country}
                                            onChange={(e) => setForm({ ...form, country: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Foto URL</label>
                                        <input
                                            type="text"
                                            value={form.photo_url}
                                            onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
                                            className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 pt-2">
                                    <DialogClose asChild>
                                        <button type="button" className="px-4 py-2 text-sm rounded-md border border-[#1c1c1c]/20 hover:bg-gray-50 transition-colors cursor-pointer">
                                            Batal
                                        </button>
                                    </DialogClose>
                                    <button type="submit" className="px-4 py-2 text-sm text-white bg-[#0f7a4a] hover:bg-[#0c6239] rounded-md transition-colors cursor-pointer">
                                        {editing ? 'Simpan' : 'Tambah'}
                                    </button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Tabel */}
                <div className="relative mt-4 rounded-md overflow-hidden h-100">
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-[#0f7a4a]/15 text-left">
                            <tr>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Nama</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">No</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Posisi</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Gol</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Assist</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Usia</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Negara</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pemain.data.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                        Tidak ada pemain
                                    </td>
                                </tr>
                            ) : (
                                pemain.data.map((item: PlayerItem) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.full_name}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.jersey_number || '-'}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.position || '-'}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.goals}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.assists}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.age || '-'}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.country || '-'}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        onClick={() => openEdit(item)}
                                                        className="bg-[#efbf04] text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="size-4" />
                                                    </button>
                                                </DialogTrigger>
                                            </Dialog>
                                            <button
                                                onClick={() => handleDelete(item.id)}
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
                {pemain.last_page > 1 && (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <Pagination>
                            <PaginationContent>
                                {pemain.links.map((link, i) => {
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
                            Menampilkan {pemain.from}–{pemain.to} dari {pemain.total} pemain
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
