import { ChevronLeft, ChevronRight, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

/* News slides */
const newsItems = [1, 2, 3, 4, 5];

/* News section */
export default function HomeNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    };

    return (
        <section className="w-full relative flex flex-col lg:flex-row [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
            <div className="flex flex-col w-full lg:w-1/3 overflow-hidden bg-[#1c1c1c] border-[#1c1c1c] border-b lg:border-b-0 border-r">
                {/* Title Section Berita */}
                <div className="relative lg:w-1/2 mx-auto lg:max-w-7xl h-auto lg:h-[72vh] py-8 sm:py-12 md:py-16 lg:ml-24">
                    <h2 className="font-calcio-italiano text-3xl sm:text-3xl md:text-4xl lg:text-6xl tracking-wider text-[#f5f5f5] uppercase animate-typing overflow-hidden whitespace-nowrap ">
                        Headlines
                    </h2>
                    <div className="h-1 w-16 sm:w-20 md:w-24 bg-[#f5f5f5]" />
                </div>
            </div>

            {/* Isi Berita */}
            <div className="flex flex-col w-full lg:w-2/3 bg-[#1c1c1c] overflow-y-auto right-0">
                {/* Segment Berita */}
                <div className="relative flex flex-col lg:flex-row lg:w-full pb-0 lg:pb-16 h-auto lg:h-[71.5vh] lg:px-0">

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#1c1c1c] border-b lg:border-b-0 overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gray-300">
                            <span className="text-lg font-bold tracking-widest text-gray-500 uppercase md:text-xl">
                                Banner Berita 1
                            </span>
                            <span className="text-[10px] font-medium text-gray-400 md:text-xs">
                                <span className="lg:hidden">360 x 270 px</span>
                                <span className="hidden lg:inline">240 x 320 px</span>
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Pertama
                            </h2>
                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#1c1c1c] border-b lg:border-b-0 overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gray-300">
                            <span className="text-lg font-bold tracking-widest text-gray-500 uppercase md:text-xl">
                                Banner Berita 2
                            </span>
                            <span className="text-[10px] font-medium text-gray-400 md:text-xs">
                                <span className="lg:hidden">360 x 270 px</span>
                                <span className="hidden lg:inline">240 x 320 px</span>
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Kedua
                            </h2>
                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#1c1c1c] border-b lg:border-b-0 overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gray-300">
                            <span className="text-lg font-bold tracking-widest text-gray-500 uppercase md:text-xl">
                                Banner Berita 3
                            </span>
                            <span className="text-[10px] font-medium text-gray-400 md:text-xs">
                                <span className="lg:hidden">360 x 270 px</span>
                                <span className="hidden lg:inline">240 x 320 px</span>
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Ketiga
                            </h2>
                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#f5f5f5] border-b lg:border-b-0 overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gray-300">
                            <span className="text-lg font-bold tracking-widest text-gray-500 uppercase md:text-xl">
                                Banner Berita 4
                            </span>
                            <span className="text-[10px] font-medium text-gray-400 md:text-xs">
                                <span className="lg:hidden">360 x 270 px</span>
                                <span className="hidden lg:inline">240 x 320 px</span>
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Keempat
                            </h2>
                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                </div>
                {/* Button Lihat Lainnya */}
                <div className="relative lg:absolute bottom-0 lg:-right-4 py-4 cursor-pointer text-right lg:text-left" >
                    <a href='/berita' className='font-calcio-italiano uppercase text-xl sm:text-2xl hover:bg-[#f5f5f5] hover:text-[#1c1c1c] hover:duration-300 p-5'>
                        lihat lainnya
                        <ChevronRight className="inline-block ml-2" />
                        
                    </a>
                </div>
            </div>
        </section>
    );

}
