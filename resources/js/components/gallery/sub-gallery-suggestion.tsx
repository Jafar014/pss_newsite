import { Link } from "@inertiajs/react";

export default function SubGallerySuggestion() {
    return (
        <>
            <div className="w-full py-8">
                <div className="">
                    <p className="text-[#1c1c1c] text-center font-calcio-italiano text-4xl py-4">Lihat Juga</p>
                </div>
                <div className="px-8 py-4">
                    <Link key={6}
                    href={'/galeri/6'}
                    className="group cursor-pointer ">
                        <div className="h-45 py-4 bg-gray-400">
                            <p className="text-center">image here</p>
                        </div>
                        <p className="text-[#1c1c1c] text-left font-bold text-md py-2 group-hover:text-[#0f7a4a]">Matchday x: vs. Opponent 6</p>
                    </Link>
                </div>

                <div className="px-8 py-4">
                    <Link key={7}
                    href={'/galeri/7'}
                    className="group cursor-pointer ">
                        <div className="h-45 py-4 bg-gray-400">
                            <p className="text-center">image here</p>
                        </div>
                        <p className="text-[#1c1c1c] text-left font-bold text-md py-2 group-hover:text-[#0f7a4a]">Matchday x: vs. Opponent 7</p>
                    </Link>
                </div>

                <div className="px-8 py-4">
                    <Link key={8}
                    href={'/galeri/8'}
                    className="group cursor-pointer ">
                        <div className="h-45 py-4 bg-gray-400">
                            <p className="text-center">image here</p>
                        </div>
                        <p className="text-[#1c1c1c] text-left font-bold text-md py-2 group-hover:text-[#0f7a4a]">Matchday x: vs. Opponent 8</p>
                    </Link>
                </div>
                <a href="/galeri" >
                    <p className="text-[#1c1c1c] font-calcio-italiano text-2xl underline text-center hover:text-[#0f7a4a] py-2">Selengkapnya</p>
                </a>
            </div>
        </>
    );
}