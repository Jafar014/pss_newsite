import { Link } from "@inertiajs/react";

export default function GalleryListContent() {
    return (
        <div className="w-full py-8">
            <div className="mx-auto max-w-7xl grid grid-cols-2 py-4 gap-x-8 gap-y-4 px-16">
                {/* Galeri 1 */}
                <div className="w-full grid grid-rows-2 h-[40vh] border-[#0f7a4a] py-4 cursor-pointer group">
                    <Link key={1}
                    href={'/galeri/1'}
                    className="group cursor-pointer h-61">
                        {/* Gambar galeri */}
                        <div className="row-span-2 mx-4 ">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul galeri */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors cursor-pointer" href="/berita/2">
                                Matchday xx: PSS vs Opponent 1
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Galeri 2 */}
                <div className="w-full grid grid-rows-2 h-[40vh] border-[#0f7a4a] py-4 cursor-pointer group">
                    <Link key={2}
                    href={'/galeri/2'}
                    className="group cursor-pointer h-61">
                        {/* Gambar galeri */}
                        <div className="row-span-2 mx-4 ">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul galeri */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors cursor-pointer" href="/berita/2">
                                Matchday xx: PSS vs Opponent 2
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Galeri 3 */}
                <div className="w-full grid grid-rows-2 h-[40vh] border-[#0f7a4a] py-4 cursor-pointer group">
                    <Link key={3}
                    href={'/galeri/3'}
                    className="group cursor-pointer h-61">
                        {/* Gambar galeri */}
                        <div className="row-span-2 mx-4 ">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul galeri */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors cursor-pointer" href="/berita/2">
                                Matchday xx: PSS vs Opponent 3
                            </a>
                        </div>
                    </Link>
                </div>

                {/* Galeri 4 */}
                <div className="w-full grid grid-rows-2 h-[40vh] border-[#0f7a4a] py-4 cursor-pointer group">
                    <Link key={4}
                    href={'/galeri/4'}
                    className="group cursor-pointer h-61">
                        {/* Gambar galeri */}
                        <div className="row-span-2 mx-4 ">
                            <div className="bg-gray-400 h-60">
                                <p className="text-center">Image here</p>
                            </div>
                        </div>
                        {/* Div kosong biarkan saja */}
                        <div className=""></div>
                        {/* Judul galeri */}
                        <div className="mx-4 mt-2">
                            <a className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors cursor-pointer" href="/berita/2">
                                Matchday xx: PSS vs Opponent 4
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}