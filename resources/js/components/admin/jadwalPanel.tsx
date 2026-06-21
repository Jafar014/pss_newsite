import { router } from "@inertiajs/react";
import { Search, Pencil, Trash2 } from "lucide-react";
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
    DialogClose,
} from "@/components/ui/dialog";

interface FixtureItem {
    id: number;
    competition: string;
    gameweek: string | null;
    home_team: string;
    away_team: string;
    home_goals: number | null;
    away_goals: number | null;
    match_date: string;
    status: string | null;
    venue: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface FixturePaginated {
    data: FixtureItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

export default function JadwalPanel({ fixtures, clubs }: { fixtures: FixturePaginated; clubs: Record<string, { id: number; slug: string; name: string; logo_url: string }> }) {
    const [editing, setEditing] = useState<FixtureItem | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [form, setForm] = useState({
        competition: 'PEGADAIAN_CHAMPIONSHIP_2025-26',
        gameweek: '',
        home_team: '',
        away_team: '',
        home_goals: '',
        away_goals: '',
        match_date: '',
        status: 'NS',
        venue: '',
    });

    function resetForm() {
        setForm({
            competition: 'PEGADAIAN_CHAMPIONSHIP_2025-26',
            gameweek: '',
            home_team: '',
            away_team: '',
            home_goals: '',
            away_goals: '',
            match_date: '',
            status: 'NS',
            venue: '',
        });
        setEditing(null);
    }

    function openEdit(item: FixtureItem) {
        setEditing(item);
        setForm({
            competition: item.competition,
            gameweek: item.gameweek || '',
            home_team: item.home_team,
            away_team: item.away_team,
            home_goals: item.home_goals !== null ? String(item.home_goals) : '',
            away_goals: item.away_goals !== null ? String(item.away_goals) : '',
            match_date: item.match_date ? item.match_date.slice(0, 16) : '',
            status: item.status || 'NS',
            venue: item.venue || '',
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const payload = {
            ...form,
            home_goals: form.home_goals !== '' ? Number(form.home_goals) : null,
            away_goals: form.away_goals !== '' ? Number(form.away_goals) : null,
        };

        if (editing) {
            router.put(`/admin/kompetisi/jadwal/${editing.id}`, payload, {
                onSuccess: () => resetForm(),
            });
        } else {
            router.post('/admin/kompetisi/jadwal', payload, {
                onSuccess: () => resetForm(),
            });
        }
    }

    function handleDelete(id: number) {
        if (confirm('Hapus jadwal ini?')) {
            router.delete(`/admin/kompetisi/jadwal/${id}`);
        }
    }

    function formatDate(dateStr: string) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    }

    const statusBadge = (status: string | null) => {
        const s = status || 'NS';
        const styles: Record<string, { cls: string; label: string }> = {
            FT: { cls: 'bg-green-100 text-green-700', label: 'FT' },
            HT: { cls: 'bg-yellow-100 text-yellow-700', label: 'HT' },
            NS: { cls: 'bg-gray-100 text-gray-600', label: 'Jadwal' },
        };
        const style = styles[s] || styles.NS;
        return (
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${style.cls}`}>
                {style.label}
            </span>
        );
    };

    return (
        <>
            <div className="w-full">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Manajemen Jadwal & Hasil</h1>

                {/* Toolbar */}
                <div className="flex items-center gap-1 mt-8">
                    <div className="relative flex-1 max-w-full">
                        <input
                            type="text"
                            placeholder="Cari jadwal..."
                            className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#1c1c1c]/40" />
                    </div>
                </div>

                {/* Tabel */}
                <div className="relative mt-4 rounded-md overflow-hidden">
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-[#0f7a4a]/15 text-left">
                            <tr>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">GW</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Tanggal</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Tuan Rumah</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Skor</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Skor</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Tamu</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Status</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Venue</th>
                                <th className="px-4 py-3 text-sm font-bold text-[#1c1c1c]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fixtures.data.length === 0 ? (
                                <tr>
                                    <td colSpan={9} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                        Tidak ada jadwal
                                    </td>
                                </tr>
                            ) : (
                                fixtures.data.map((item: FixtureItem) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.gameweek || '-'}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c] whitespace-nowrap">{formatDate(item.match_date)}</td>
                                        <td className={`px-4 py-3 text-sm ${item.home_team === 'PSS SLEMAN' ? 'font-bold text-[#0f7a4a]' : 'font-medium text-[#1c1c1c]'}`}>{item.home_team}</td>
                                        <td className={`px-4 py-3 text-sm font-bold text-center ${item.home_team === 'PSS SLEMAN' ? 'text-[#0f7a4a]' : 'text-[#1c1c1c]'}`}>{item.home_goals !== null ? item.home_goals : '-'}</td>
                                        <td className={`px-4 py-3 text-sm font-bold text-center ${item.away_team === 'PSS SLEMAN' ? 'text-[#0f7a4a]' : 'text-[#1c1c1c]'}`}>{item.away_goals !== null ? item.away_goals : '-'}</td>
                                        <td className={`px-4 py-3 text-sm ${item.away_team === 'PSS SLEMAN' ? 'font-bold text-[#0f7a4a]' : 'font-medium text-[#1c1c1c]'}`}>{item.away_team}</td>
                                        <td className="px-4 py-3 text-sm">{statusBadge(item.status)}</td>
                                        <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.venue || '-'}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <button
                                                onClick={() => { openEdit(item); setDialogOpen(true); }}
                                                className="bg-[#efbf04] text-white rounded-md p-2 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer"
                                                title="Edit"
                                            >
                                                <Pencil className="size-3.5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-red-600 text-white rounded-md p-2 shadow-sm hover:bg-red-700 transition-colors ml-1.5 cursor-pointer"
                                                title="Hapus"
                                            >
                                                <Trash2 className="size-3.5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Edit Dialog */}
                <Dialog open={dialogOpen} onOpenChange={(open) => { if (!open) { resetForm(); setDialogOpen(false); } }}>
                    <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Edit Jadwal</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium mb-1">Kompetisi</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.competition}
                                        onChange={(e) => setForm({ ...form, competition: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Gameweek</label>
                                    <input
                                        type="text"
                                        value={form.gameweek}
                                        onChange={(e) => setForm({ ...form, gameweek: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tanggal & Waktu</label>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={form.match_date}
                                        onChange={(e) => setForm({ ...form, match_date: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tim Tuan Rumah</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.home_team}
                                        onChange={(e) => setForm({ ...form, home_team: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        list="club-list"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tim Tamu</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.away_team}
                                        onChange={(e) => setForm({ ...form, away_team: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                        list="club-list"
                                    />
                                </div>
                                <datalist id="club-list">
                                    {Object.keys(clubs).map((name) => (
                                        <option key={name} value={name} />
                                    ))}
                                </datalist>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Gol Tuan Rumah</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={form.home_goals}
                                        onChange={(e) => setForm({ ...form, home_goals: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Gol Tamu</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={form.away_goals}
                                        onChange={(e) => setForm({ ...form, away_goals: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Status</label>
                                    <select
                                        value={form.status}
                                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-[#1c1c1c]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] bg-white"
                                    >
                                        <option value="NS">Belum Mulai (NS)</option>
                                        <option value="HT">Babak Pertama (HT)</option>
                                        <option value="FT">Selesai (FT)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Venue</label>
                                    <input
                                        type="text"
                                        value={form.venue}
                                        onChange={(e) => setForm({ ...form, venue: e.target.value })}
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
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Pagination */}
                {fixtures.last_page > 1 && (
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <Pagination>
                            <PaginationContent>
                                {fixtures.links.map((link, i) => {
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
                            Menampilkan {fixtures.from}–{fixtures.to} dari {fixtures.total} jadwal
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
