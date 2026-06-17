import { Search, Plus, Pencil, Archive, Trash2 } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { router } from "@inertiajs/react";

interface StaffItem {
    id: number;
    team_id: number;
    full_name: string;
    role: string;
    photo_url: string;
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
    return (
        <>
            <div className="w-full">
                <h1 className="text-[#1c1c1c] text-2xl font-semibold">Staff Klub</h1>

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
                    {/* Button: Tambah Berita */}
                    <button className="inline-flex items-center gap-2 h-12 cursor-pointer px-4 rounded-md text-sm font-medium text-white bg-[#0f7a4a] hover:bg-[#0c6239] transition-colors ml-auto">
                        <Plus className="size-4 " />
                        Tambah Staff
                    </button>
                </div>

                {/* Tabel */}
                <div className="relative mt-4 rounded-md overflow-hidden h-100">
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-[#0f7a4a]/15 text-left">
                            <tr>
                                <th className=" px-4 py-3 text-sm font-bold text-[#1c1c1c]">Nama</th>
                                <th className=" px-4 py-3 text-sm font-bold text-[#1c1c1c]">Role</th>
                                <th className=" px-4 py-3 text-sm font-bold text-[#1c1c1c]">Foto Url</th>
                                <th className=" px-4 py-3 text-sm font-bold text-[#1c1c1c]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.data.length === 0 ? (
                                <tr>
                                <td colSpan={4} className="px-4 py-12 text-center text-sm text-[#1c1c1c]/60">
                                    Tidak ada staff
                                </td>
                            </tr>
                            ) : (
                                staff.data.map((item: StaffItem) => (
                                <tr key={item.id} className="border-t">
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.full_name}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.role || '-'}</td>
                                    <td className="px-4 py-3 text-sm text-[#1c1c1c]">{item.photo_url}</td>
                                    <td className="px-4 py-3 text-sm ">
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
                            Menampilkan {staff.from}–{staff.to} dari {staff.total} Staff
                        </p>
                    </div>
                )}
                </div>
        </>
    );
}