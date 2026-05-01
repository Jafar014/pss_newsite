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
        <section className="w-full">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0  bg-[#0F7A4A] " />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <h2 className="font-calcio-italiano text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#ffffff] uppercase">
                        Berita Terkini
                    </h2>
                    <div className="h-1 w-24 bg-[#ffffff]" />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-16">
                <div className="relative h-[320px]">
                    {newsItems.map((item, index) => (
                        <div
                            key={item}
                            className="absolute inset-0 transition-opacity duration-700 px-2"
                            style={{
                                opacity: index === currentIndex ? 1 : 0,
                                zIndex: index === currentIndex ? 1 : 0,
                                pointerEvents: index === currentIndex ? 'auto' : 'none',
                            }}
                        >
                            <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden h-full">
                                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Gambar Berita {item}</span>
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    <div className="h-3 bg-gray-200 rounded w-full" />
                                    <div className="h-3 bg-gray-200 rounded w-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors cursor-pointer"
                >
                    <svg className="w-5 h-5 text-[#1C1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors cursor-pointer"
                >
                    <svg className="w-5 h-5 text-[#1C1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
                    {newsItems.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-8 bg-[#0F7A4A]' : 'w-4 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
