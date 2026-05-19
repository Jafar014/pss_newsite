import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoreCard() {
    return(
        <section className="w-full justify-center items-center pb-8">
            <div className="mx-auto max-w-7xl py-2 px-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="relative border rounded-lg">
                        <div className="relative bg-gray-400 rounded-lg p-6 h-84">
                            <p>Image Here</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pt-16">
                            <p className="text-[#1c1c1c] text-3xl">Nama Barang</p>
                            <p className="text-[#0f7a4a] text-2xl italic pb-2">RP. XXX.XXX</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pb-2">
                            <button className="p-3 border font-calcio-italiano rounded-lg text-[#0f7a4a] w-full hover:bg-[#0f7a4a] cursor-pointer transition-all duration-300 hover:text-white">
                                <span className="text-xl">Pesan</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative border rounded-lg">
                        <div className="relative bg-gray-400 rounded-lg p-6 h-84">
                            <p>Image Here</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pt-16">
                            <p className="text-[#1c1c1c] text-3xl">Nama Barang</p>
                            <p className="text-[#0f7a4a] text-2xl italic pb-2">RP. XXX.XXX</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pb-2">
                            <button className="p-3 border font-calcio-italiano rounded-lg text-[#0f7a4a] w-full hover:bg-[#0f7a4a] cursor-pointer transition-all duration-300 hover:text-white">
                                <span className="text-xl">Pesan</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative border rounded-lg">
                        <div className="relative bg-gray-400 rounded-lg p-6 h-84">
                            <p>Image Here</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pt-16">
                            <p className="text-[#1c1c1c] text-3xl">Nama Barang</p>
                            <p className="text-[#0f7a4a] text-2xl italic pb-2">RP. XXX.XXX</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pb-2">
                            <button className="p-3 border font-calcio-italiano rounded-lg text-[#0f7a4a] w-full hover:bg-[#0f7a4a] cursor-pointer transition-all duration-300 hover:text-white">
                                <span className="text-xl">Pesan</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative border rounded-lg">
                        <div className="relative bg-gray-400 rounded-lg p-6 h-84">
                            <p>Image Here</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pt-16">
                            <p className="text-[#1c1c1c] text-3xl">Nama Barang</p>
                            <p className="text-[#0f7a4a] text-2xl italic pb-2">RP. XXX.XXX</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pb-2">
                            <button className="p-3 border font-calcio-italiano rounded-lg text-[#0f7a4a] w-full hover:bg-[#0f7a4a] cursor-pointer transition-all duration-300 hover:text-white">
                                <span className="text-xl">Pesan</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative border rounded-lg">
                        <div className="relative bg-gray-400 rounded-lg p-6 h-84">
                            <p>Image Here</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pt-16">
                            <p className="text-[#1c1c1c] text-3xl">Nama Barang</p>
                            <p className="text-[#0f7a4a] text-2xl italic pb-2">RP. XXX.XXX</p>
                        </div>
                        <div className="relative px-4 font-calcio-italiano pb-2">
                            <button className="p-3 border font-calcio-italiano rounded-lg text-[#0f7a4a] w-full hover:bg-[#0f7a4a] cursor-pointer transition-all duration-300 hover:text-white">
                                <span className="text-xl">Pesan</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-4 mt-8 mr-20 mx-auto max-w-2xl items-center justify-center">
                    <ChevronLeft
                    size={20}
                    className="relative grid text-bold  text-[#1c1c1c] cursor-pointer"/>
                    <li className="text-black list-none p-3 cursor-pointer">
                        <span className="bg-[#0f7a4a] p-2 mr-2 w-10 rounded-full">1</span>
                        <span className="bg-[#0f7a4a] p-2 w-10 rounded-full">2</span> 
                    </li>
                    <ChevronRight
                    size={20}
                    className="relative ml-16 grid text-bold text-[#1c1c1c] cursor-pointer"/>
                </div>
            </div>
        </section>
    );
}