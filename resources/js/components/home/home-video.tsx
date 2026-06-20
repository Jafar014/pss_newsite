import { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';

const videos = [
    { id: 'Y0rh_Of_nhg', title: 'Parade Gol PSS Sleman Pegadaian Championship 2025/26' },
    { id: '-VoBHBHhRGM', title: 'Inside The Game: Final PSS Sleman Vs Garudayaksa FC' },
    { id: 'RyDrU8I4LKc', title: 'PSS Sleman VS Garudayaksa FC Full Highlights   Pegadaian Championship 2025 26' },
    { id: 'dQw4w9WgXcQ', title: 'Dokumentasi PSS Sleman: Perjalanan Musim Ini' },
];

export default function HomeVideo() {
    const [dialogVideoId, setDialogVideoId] = useState<string | null>(null);

    return (
        <>
        <div className="relative w-full bg-[#0f7a4a] bg-opacity-50 py-6 sm:py-10 md:py-14 px-4 sm:px-5 md:px-6">
            <div className="w-full flex flex-col gap-3 sm:gap-4">

                    {/* --- Header: judul (kiri) + player utama (kanan) --- */}
                    <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 min-h-0">
                        <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start">
                            <h2 className="font-calcio-italiano text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-[#f5f5f5] uppercase leading-none italic text-center lg:text-left">
                                Video<span className="sm:hidden">&nbsp;</span><br className="hidden sm:inline" />Terbaru
                            </h2>
                        </div>

                        {/* --- Player utama --- */}
                        <div className="w-full lg:flex-1 flex flex-col gap-2">
                            <div className="rounded-2xl overflow-hidden bg-[#0f7a4a]/80">
                                <div className="relative w-full aspect-video">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center cursor-pointer"
                                        style={{ backgroundImage: `url('https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg')` }}
                                        onClick={() => setDialogVideoId(videos[0].id)}
                                    >
                                        <div className="absolute inset-0 bg-[#1c1c1c]/20 flex items-center justify-center">
                                            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-[#f5f5f5]/80 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110">
                                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#f5f5f5] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[#f5f5f5] text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                                {videos[0].title}
                            </h3>
                        </div>
                    </div>

                    {/* --- Separator --- */}
                    <div className="w-[calc(100%+32px)] sm:w-[calc(100%+40px)] md:w-[calc(100%+48px)] -mx-4 sm:-mx-5 md:-mx-6 shrink-0 h-px bg-[#f5f5f5]/30" />

                    {/* --- Daftar video (grid 3 kolom) --- */}
                    <div className="w-full max-w-[1400px] mx-auto shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 md:pt-4 sm:gap-4">
                        {videos.slice(1).map((video) => (
                            <div
                                key={video.id}
                                className="flex items-center gap-3 sm:gap-4 cursor-pointer group min-w-0 sm:border-r sm:border-[#f5f5f5]/30 sm:[&:nth-child(3n)]:border-r-0 pb-3 sm:pb-0 border-b sm:border-b-0 border-[#f5f5f5]/30 last:border-b-0"
                                onClick={() => setDialogVideoId(video.id)}
                            >
                                {/* --- Thumbnail card --- */}
                                <div className="relative w-28 sm:w-36 md:w-44 lg:w-52 aspect-video rounded-lg overflow-hidden shrink-0 bg-[#0f7a4a]/60">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('https://img.youtube.com/vi/${video.id}/maxresdefault.jpg')` }}
                                    />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#1c1c1c]/20 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    </div>
                                </div>
                                <p className="text-[#f5f5f5] text-xs sm:text-sm md:text-base font-semibold leading-snug line-clamp-2">
                                    {video.title}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
        </div>

            {/* Video Dialog */}
            <Dialog open={!!dialogVideoId} onOpenChange={(open) => { if (!open) setDialogVideoId(null); }}>
                <DialogContent showClose={false} className="inset-0 w-screen h-dvh max-w-full sm:max-w-none translate-x-0 translate-y-0 rounded-none bg-transparent border-none p-0 grid place-items-center">
                    <DialogClose className="absolute top-0 right-0 bg-transparent border-none opacity-100 text-[#f5f5f5] ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-hidden cursor-pointer p-2">
                        <XIcon className="size-6 lg:size-10" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                    <div className="relative w-full max-w-4xl lg:max-w-6xl aspect-video mx-4 sm:mx-6">
                        {dialogVideoId && (
                            <iframe
                                src={`https://www.youtube.com/embed/${dialogVideoId}?autoplay=1`}
                                className="absolute inset-0 w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}