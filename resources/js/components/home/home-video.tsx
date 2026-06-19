import { useState } from 'react';

const videos = [
    { id: 'Y0rh_Of_nhg', title: 'Parade Gol PSS Sleman Pegadaian Championship 2025/26' },
    { id: '-VoBHBHhRGM', title: 'Inside The Game: Final PSS Sleman Vs Garudayaksa FC' },
    { id: 'RyDrU8I4LKc', title: 'PSS Sleman VS Garudayaksa FC Full Highlights   Pegadaian Championship 2025 26' },
];

export default function HomeVideo() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative w-full min-h-[650px] sm:min-h-[789px] lg:h-[789px]">

            <div className="absolute inset-0 bg-[#0f7a4a] bg-opacity-50 py-6 sm:py-10 md:py-14 px-4 sm:px-5 md:px-6 overflow-y-auto">
                <div className="w-full h-full flex flex-col gap-3 sm:gap-4">

                    {/* --- Header: judul (kiri) + player utama (kanan) --- */}
                    <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1 min-h-0">
                        <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start">
                            <h2 className="font-calcio-italiano text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase leading-none italic text-center lg:text-left">
                                Video<span className="sm:hidden">&nbsp;</span><br className="hidden sm:inline" />Terbaru
                            </h2>
                        </div>

                        {/* --- Player utama --- */}
                        <div className="w-full lg:flex-1 rounded-2xl overflow-hidden bg-[#0f7a4a]/80">
                            <div className="relative w-full aspect-video">
                                {isPlaying ? ( // kondisi: sedang diputar
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videos[activeIdx].id}?autoplay=1`}
                                        title={videos[activeIdx].title}
                                        className="absolute inset-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    // thumbnail + tombol play
                                    <div
                                        className="absolute inset-0 bg-cover bg-center cursor-pointer"
                                        style={{ backgroundImage: `url('https://img.youtube.com/vi/${videos[activeIdx].id}/maxresdefault.jpg')` }}
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110">
                                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* --- Separator --- */}
                    <div className="w-[calc(100%+32px)] sm:w-[calc(100%+40px)] md:w-[calc(100%+48px)] -mx-4 sm:-mx-5 md:-mx-6 shrink-0 h-px bg-[#f5f5f5]/30" />

                    {/* --- Daftar video (grid 3 kolom) --- */}
                    <div className="w-full max-w-[1400px] mx-auto shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 md:pt-4 sm:gap-4">
                        {videos.map((video, idx) => (
                            // Klik → ganti video aktif
                            <div
                                key={video.id}
                                className="flex items-center gap-3 sm:gap-4 cursor-pointer group min-w-0 sm:border-r sm:border-[#f5f5f5]/30 sm:[&:nth-child(3n)]:border-r-0 pb-3 sm:pb-0 border-b sm:border-b-0 border-[#f5f5f5]/30 last:border-b-0"
                                onClick={() => { setActiveIdx(idx); setIsPlaying(true); }}
                            >
                                {/* --- Thumbnail card --- */}
                                <div className={`relative w-28 sm:w-36 md:w-44 lg:w-52 aspect-video rounded-lg overflow-hidden shrink-0 bg-[#0f7a4a]/60 ${
                                    activeIdx === idx ? 'ring-4 ring-[#EFBF04]' : '' // ring kuning = video aktif
                                }`}>
                                    {/* Gambar thumbnail */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('https://img.youtube.com/vi/${video.id}/maxresdefault.jpg')` }}
                                    />
                                    {/* Overlay aktif: darken konstan */}
                                    <div className={`absolute inset-0 transition-all duration-300 ${
                                        activeIdx === idx
                                            ? 'bg-[#1c1c1c]/20'
                                            : 'opacity-0 group-hover:opacity-100 bg-black/20'
                                    }`} />
                                    {/* Tombol play (hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 group-hover:scale-110">
                                            <svg className="w-5 h-5 ml-0.5 text-[#0f7a4a]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Judul video */}
                                <p className="text-white text-xs sm:text-sm md:text-base font-semibold leading-snug line-clamp-2">
                                    {video.title}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}