import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface HeroSlide {
    id: number;
    title: string;
}

const slides: HeroSlide[] = [
    {
        id: 1,
        title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
    },
    {
        id: 2,
        title: 'Persiapan Jelang Derby: Tim Berlatih di Stadion Utama',
    },
    {
        id: 3,
        title: 'Pemain Baru Resmi Bergabung di PSS Sleman',
    },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function HomeHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section
            className="relative w-full bg-[#1C1C1C] cursor-pointer"
            onClick={() => router.visit(`/berita/${slides[currentSlide].id}`)}
        >
            <div className="relative flex h-auto min-h-[20vh] md:min-h-[25vh] items-center px-4 py-6 md:px-8 lg:px-12">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-1">
                    <div className="mb-1 h-1 w-16 bg-[#0F7A4A] md:w-20" />
                    <h2 className="text-sm font-bold tracking-wider text-[#f5f5f5] uppercase md:text-xl lg:text-2xl">
                        {slides[currentSlide].title}
                    </h2>
                    <span className="text-[10px] text-gray-500 md:text-xs">
                        <span className="md:hidden">640 x 360 px</span>
                        <span className="hidden md:inline lg:hidden">1024 x 576 px</span>
                        <span className="hidden lg:inline">1920 x 1080 px</span>
                    </span>
                </div>

                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#0F7A4A] md:left-4 md:h-10 md:w-10 cursor-pointer"
                >
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#0F7A4A] md:right-4 md:h-10 md:w-10 cursor-pointer"
                >
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'w-6 bg-[#0F7A4A]' : 'w-3 bg-white/50 hover:bg-white/70'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
