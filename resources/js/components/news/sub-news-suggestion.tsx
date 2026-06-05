import { Link } from "@inertiajs/react";

export default function SubNewsSuggestion() {
    return (
        <div className="w-full h-full py-8">
            {/* Sub Header Berita Lainnya */}
            <div className="mx-auto max-w-7xl ">
                <h1 className="text-center font-calcio-italiano text-6xl text-[#1c1c1c]">Berita Lainnya</h1>
            </div>
            {/* List Berita */}
            <div className="mx-auto max-w-7xl h-full grid grid-cols-2 mt-8 px-8 gap-x-8">
                {/* Berita 1 */}
                <div className="w-full grid grid-rows-2 border-b-2 border-[#0f7a4a] -ml-8 py-4 group h-[44vh]">
                    <Link
                    key={4}
                    href={'/berita/4'}
                    className="group cursor-pointer ">
                        {/* Gambar berita */}
                        <div className="row-span-2 mx-4 group-hover:cursor-pointer">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul Berita */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors group-hover:cursor-pointer" href="/berita/2">
                                Judul Berita 4
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Berita 2 */}
                <div className="w-full grid grid-rows-2 border-b-2 border-[#0f7a4a] -ml-8 py-4 group h-[44vh]">
                    <Link
                    key={5}
                    href={'/berita/5'}
                    className="group cursor-pointer ">
                        {/* Gambar berita */}
                        <div className="row-span-2 mx-4 group-hover:cursor-pointer">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul Berita */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors group-hover:cursor-pointer" href="/berita/2">
                                Judul Berita 5
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Berita 3 */}
                <div className="w-full grid grid-rows-2 border-b-2 border-[#0f7a4a] -ml-8 py-4 group h-[44vh]">
                    <Link
                    key={6}
                    href={'/berita/6'}
                    className="group cursor-pointer ">
                        {/* Gambar berita */}
                        <div className="row-span-2 mx-4 group-hover:cursor-pointer">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul Berita */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors group-hover:cursor-pointer" href="/berita/2">
                                Judul Berita 6
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Berita 4 */}
                <div className="w-full grid grid-rows-2 border-b-2 border-[#0f7a4a] -ml-8 py-4 group h-[44vh]">
                    <Link
                    key={7}
                    href={'/berita/7'}
                    className="group cursor-pointer ">
                        {/* Gambar berita */}
                        <div className="row-span-2 mx-4 group-hover:cursor-pointer">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul Berita */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors group-hover:cursor-pointer" href="/berita/2">
                                Judul Berita 7
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="col-span-2 mt-8 w-full p-4">
                    <a href="/berita" className="text-[#1c1c1c] underline py-2 ml-[71vh] font-calcio-italiano text-3xl hover:text-[#0f7a4a]">Lihat Lainnya</a>
                </div>
            </div>
        </div>
    );
}