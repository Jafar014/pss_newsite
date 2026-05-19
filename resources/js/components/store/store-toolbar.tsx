import { SlidersHorizontal, Search, SortAsc, ArrowUpDownIcon } from "lucide-react";
ArrowUpDownIcon

export default function StoreToolbar() {
    return(
        <section className="py-6 w-full justify-center items-center">
            <div className="mx-auto max-w-6xl">
                <div className="relative h-20 px-4 pt-4">
                    <div className="relative grid h-12">
                        <input type="text"
                        placeholder="Cari Disini"
                        className="border-b text-[#0f7a4a] font-semibold border-b-[#0f7a4a]/75 transition rounded-full pl-8 focus:border-b-[#0f7a4a] focus:border-b-2 outline-none" />
                        <Search 
                        size={20}
                        className="absolute right-24 my-3.5 text-[#0f7a4a] cursor-pointer"/>
                        <SlidersHorizontal 
                        size={20}
                        className="absolute right-16 my-3.5 text-[#0f7a4a] cursor-pointer"/>
                        <ArrowUpDownIcon 
                        size={20}
                        className="absolute right-8 my-3.5 text-[#0f7a4a] cursor-pointer"/>
                    </div>
                </div>
            </div>
        </section>
    );
}