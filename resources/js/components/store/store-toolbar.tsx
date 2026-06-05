import { SlidersHorizontal, Search, ArrowUpDownIcon, X } from "lucide-react";
import { useState } from "react";

export default function StoreToolbar() {
    const [filterOpen, setFilterOpen] = useState(false);

    return(
        <section className="py-6 w-full justify-center items-center">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative">
                    <div className="relative flex items-center h-12">
                        <input type="text"
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
                                        {['Semua', 'Jersey', 'Aksesoris', 'Apparel', 'Souvenir'].map((cat) => (
                                            <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="category" defaultChecked={cat === 'Semua'} className="accent-[#0f7a4a]" />
                                                <span className="text-sm text-[#1c1c1c]">{cat}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-calcio-italiano text-sm text-gray-500 block mb-3">Urutkan</span>
                                    <div className="flex flex-col gap-2">
                                        {['Terbaru', 'Termurah', 'Termahal', 'Nama A-Z', 'Nama Z-A'].map((sort) => (
                                            <label key={sort} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="sort" defaultChecked={sort === 'Terbaru'} className="accent-[#0f7a4a]" />
                                                <span className="text-sm text-[#1c1c1c]">{sort}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-5 pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => setFilterOpen(false)}
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
            </div>
        </section>
    );
}