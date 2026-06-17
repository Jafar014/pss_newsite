import { Plus, Search, Pencil, Trash2 } from "lucide-react";

interface HistoryItem {
    id: number;
    title: string;
    date: string;
    description: string;
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function HistoryPanel({ histories }: { histories: HistoryItem[] }) {
    return (
        <>
            <h1 className="text-2xl font-semibold mb-4 text-[#1c1c1c]">Manajemen Sejarah</h1>

            <div className="flex items-center gap-1 mt-8">
                <div className="relative flex-1 max-w-full">
                    <input
                        type="text"
                        placeholder="Cari sejarah..."
                        className="w-full h-12 pl-4 text-[#0f7a4a] rounded-md border border-[#1c1c1c]/20 bg-[#f5f5f5] text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0f7a4a] focus:border-transparent"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                </div>
                <button className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto">
                    <Plus className="size-4" />
                    Tambah Sejarah
                </button>
            </div>

            <div className="relative mt-4 rounded-md overflow-hidden h-100">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-[#0f7a4a]/15 text-left">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-[#1c1c1c]">Judul</th>
                            <th className="px-4 py-3 text-sm font-medium text-[#1c1c1c]">Tanggal</th>
                            <th className="px-4 py-3 text-sm font-medium text-[#1c1c1c]">Deskripsi</th>
                            <th className="px-4 py-3 text-sm font-medium text-[#1c1c1c]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {histories.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                    Tidak ada sejarah
                                </td>
                            </tr>
                        ) : (
                            histories.map((item: HistoryItem) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.title}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{formatDate(item.date)}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c] max-w-xs truncate">{item.description}</td>
                                    <td className="px-4 py-3 text-sm">
                                        <button className="bg-[#efbf04] text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-[#d4a903] transition-colors cursor-pointer" title="Edit">
                                            <Pencil className="size-4" />
                                        </button>
                                        <button className="bg-red-600 text-[#f5f5f5] rounded-md p-2.5 shadow-sm hover:bg-red-700 transition-colors ml-2 cursor-pointer" title="Hapus">
                                            <Trash2 className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
