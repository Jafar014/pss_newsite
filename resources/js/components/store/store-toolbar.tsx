import { SlidersHorizontal, Search, X } from "lucide-react";
import { useState } from "react";

interface StoreToolbarProps {
    category: string;
    setCategory: (cat: string) => void;
    sort: string;
    setSort: (sort: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const categories = ['Semua', 'Jersey', 'Training', 'Outerwear', 'Aksesoris', 'Apparel', 'Souvenir'];
const sortOptions = ['Terbaru', 'Termurah', 'Termahal', 'Nama A-Z', 'Nama Z-A'];

export default function StoreToolbar({ category, setCategory, sort, setSort, searchQuery, setSearchQuery }: StoreToolbarProps) {
    const [filterOpen, setFilterOpen] = useState(false);

    return(
        <section className="py-6 w-full justify-center items-center">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative">
                    <div className="relative flex items-center h-12">
                        <input type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari Disini"
                        className="w-full border-b focus:shadow-xl text-[#0f7a4a] font-semibold border-[#0f7a4a]/40 transition rounded-full pl-10 pr-28 md:pr-32 py-2.5 focus:border-b-[#0f7a4a] focus:border-b-2 outline-none bg-white" />
                        <Search size={18} className="absolute left-3.5 text-[#0f7a4a] pointer-events-none" />
                        <div className="absolute right-1.5 flex items-center gap-0.5">
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className={`p-2 rounded-full transition cursor-pointer ${filterOpen ? 'bg-[#0f7a4a] text-white' : 'text-[#0f7a4a] hover:bg-[#0f7a4a]/10'}`}
                            >
                                <SlidersHorizontal size={18} />
                            </button>
                        </div>
                    </div>

                    {filterOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-calcio-italiano text-lg text-[#1c1c1c]">Filter</h3>
                                <button onClick={() => setFilterOpen(false)} className="text-gray-400 hover:text-[#1c1c1c] transition cursor-pointer">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <span className="font-calcio-italiano text-sm text-gray-500 block mb-3">Kategori</span>
                                    <div className="flex flex-col gap-2">
                                        {categories.map((cat) => (
                                            <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="category" checked={category === cat} onChange={() => setCategory(cat)} className="accent-[#0f7a4a]" />
                                                <span className="text-sm text-[#1c1c1c]">{cat}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-calcio-italiano text-sm text-gray-500 block mb-3">Urutkan</span>
                                    <div className="flex flex-col gap-2">
                                        {sortOptions.map((opt) => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="sort" checked={sort === opt} onChange={() => setSort(opt)} className="accent-[#0f7a4a]" />
                                                <span className="text-sm text-[#1c1c1c]">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-5 pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        setCategory('Semua');
                                        setSort('Terbaru');
                                        setSearchQuery('');
                                        setFilterOpen(false);
                                    }}
                                    className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-[#1c1c1c] hover:bg-gray-50 transition cursor-pointer"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={() => setFilterOpen(false)}
                                    className="px-5 py-2 bg-[#0f7a4a] text-white rounded-lg text-sm hover:bg-[#0f7a4a]/90 transition cursor-pointer"
                                >
                                    Terapkan
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {category !== 'Semua' || sort !== 'Terbaru' || searchQuery ? (
                    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                        {category !== 'Semua' && (
                            <span>Kategori: <span className="font-semibold text-[#0f7a4a]">{category}</span></span>
                        )}
                        {sort !== 'Terbaru' && (
                            <>
                                {category !== 'Semua' && <span className="text-gray-300">|</span>}
                                <span>Urutan: <span className="font-semibold text-[#0f7a4a]">{sort}</span></span>
                            </>
                        )}
                        {searchQuery && (
                            <>
                                {(category !== 'Semua' || sort !== 'Terbaru') && <span className="text-gray-300">|</span>}
                                <span>Cari: "<span className="font-semibold text-[#0f7a4a]">{searchQuery}</span>"</span>
                            </>
                        )}
                    </div>
                ) : null}
            </div>
        </section>
    );
}