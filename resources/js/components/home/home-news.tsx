import { ChevronLeft, ChevronRight, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

const newsItems = [1, 2, 3, 4, 5];

export default function HomeNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    };

    return (
        <section className="w-full relative flex flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-1/3 overflow-hidden bg-[#0F7A4A]">
                <div className="absolute inset-0 ">

                    {/* bagian atas */}
                    <div className="absolute top-0 left-4 sm:left-8 md:left-15 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform skew-x-25 origin-bottom border border-[#1c1c1c]">
                    </div>

                    {/* bagian bawah (dibalik arah) */}
                    <div className="absolute bottom-0 left-4 sm:left-8 md:left-15 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform -skew-x-25 origin-top">
                    </div>

                    {/* bagian atas */}
                    <div className="absolute top-0 left-24 sm:left-36 md:left-60 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform skew-x-25 origin-bottom">
                    </div>

                    {/* bagian bawah (dibalik arah) */}
                    <div className="absolute bottom-0 left-24 sm:left-36 md:left-60 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform -skew-x-25 origin-top">
                    </div>
                    {/* bagian atas */}
                    <div className="absolute top-0 left-44 sm:left-72 md:left-102.5 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform skew-x-25 origin-bottom">
                    </div>

                    {/* bagian bawah (dibalik arah) */}
                    <div className="absolute bottom-0 left-44 sm:left-72 md:left-102.5 w-16 sm:w-20 md:w-24 h-1/2 
                        bg-[#1c1c1c] opacity-30 mix-blend-overlay 
                        transform -skew-x-25 origin-top">
                    </div>

                </div>
                {/* Title Section Berita */}
                <div className="relative lg:w-1/2 mx-auto lg:max-w-7xl h-auto lg:h-[72vh] py-8 sm:py-12 md:py-16 lg:ml-24">
                    <h2 className="font-calcio-italiano text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-[#f5f5f5] uppercase animate-typing overflow-hidden whitespace-nowrap ">
                        Berita
                    </h2>
                    <p className='font-calcio-italiano text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-[#f5f5f5] uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap'>Utama</p>
                    <div className="h-1 w-16 sm:w-20 md:w-24 bg-[#f5f5f5]" />
                </div>
            </div>

            {/* Isi Berita */}
            <div className="flex flex-col w-full lg:w-2/3 bg-[#1c1c1c] overflow-y-auto right-0">
                {/* Segment Berita */}
                <div className="relative flex flex-col lg:flex-row lg:w-full pb-8 lg:pb-16 h-auto lg:h-[71.5vh] ">

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#f5f5f5] border-b lg:border-b-0 overflow-hidden min-h-[250px] lg:min-h-0">
                        <img src="https://picsum.photos/400/300?random=1" alt="News 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {/* Efek overlay gelap */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                        {/* Isi konten berita */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
        
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Pertama
                            </h2>

                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#f5f5f5] border-b lg:border-b-0 overflow-hidden min-h-[250px] lg:min-h-0">
                        <img src="https://picsum.photos/400/300?random=2" alt="News 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {/* Efek overlay gelap */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                        {/* Isi konten berita */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
        
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Kedua
                            </h2>

                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#f5f5f5] border-b lg:border-b-0 overflow-hidden min-h-[250px] lg:min-h-0">
                        <img src="https://picsum.photos/400/300?random=3" alt="News 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {/* Efek overlay gelap */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                        {/* Isi konten berita */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
        
                            <h2 className="text-[#f5f5f5] text-4xl font-medium font-calcio-italiano transition-all duration-300 group-hover:translate-y-[-10px]">
                                Judul Berita Ketiga
                            </h2>

                            <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Lihat Berita →
                            </p>
                        </div>
                    </div>

                    <div className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#f5f5f5] border-b lg:border-b-0 overflow-hidden min-h-[250px] lg:min-h-0">
                        <img src="https://picsum.photos/400/300?random=4" alt="News 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {/* Efek overlay gelap */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 
                            bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                        {/* Isi konten berita */}
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
                <div className="relative lg:absolute -bottom-0.5 right-0 p-4 cursor-pointer" >
                    <a href='/berita' className='font-calcio-italiano uppercase text-xl sm:text-2xl hover:bg-[#f5f5f5] hover:text-[#0F7A4A] hover:duration-300 p-5'>
                        lihat lainnya
                        <ChevronRight className="inline-block ml-2" />
                        
                    </a>
                </div>
            </div>
        </section>
    );

}
