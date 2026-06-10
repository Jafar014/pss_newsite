import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface HeroSlide {
    id: number;
    title: string;
    image: string;
}

const slides: HeroSlide[] = [
    {
        id: 1,
        title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
        image: 'https://picsum.photos/1920/1080.webp?random=1',
    },
    {
        id: 2,
        title: 'Persiapan Jelang Derby: Tim Berlatih di Stadion Utama',
        image: 'https://picsum.photos/1920/1080.webp?random=2',
    },
    {
        id: 3,
        title: 'Pemain Baru Resmi Bergabung di PSS Sleman',
        image: 'https://picsum.photos/1920/1080.webp?random=3',
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
            className="relative w-full overflow-hidden bg-[#1C1C1C] cursor-pointer"
            onClick={() => router.visit(`/berita/${slides[currentSlide].id}`)}
        >
            <div className="relative h-[35vh] md:h-[60vh] lg:h-[87vh]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                            opacity: index === currentSlide ? 1 : 0,
                            zIndex: index === currentSlide ? 1 : 0,
                            pointerEvents: index === currentSlide ? 'auto' : 'none',
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            width={1920}
                            height={1080}
                            fetchPriority={index === 0 ? 'high' : 'auto'}
                            loading="eager"
                            className="h-full w-full bg-gray-300 object-cover"
                        />
                    </div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                <div className="absolute bottom-4 left-0 right-18 z-20 p-4 md:bottom-16 md:p-8 lg:p-12">
                    <div className="mx-auto max-w-7xl ">
                        <div className="mb-2 h-1 w-20 bg-[#0F7A4A]" />
                        <h2 className=" text-sm font-bold tracking-wider text-[#f5f5f5] uppercase md:text-xl lg:text-3xl">
                            {slides[currentSlide].title}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={(e) => {
 e.stopPropagation(); handlePrev(); 
}}
                    className="absolute left-3 top-1/3 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-[#0F7A4A] md:left-4 md:top-1/2 md:h-12 md:w-12 cursor-pointer"
                >
                    <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    type="button"
                    onClick={(e) => {
 e.stopPropagation(); handleNext(); 
}}
                    className="absolute right-3 top-1/3 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-[#0F7A4A] md:right-4 md:top-1/2 md:h-12 md:w-12 cursor-pointer"
                >
                    <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:bottom-16 lg:bottom-18">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={(e) => {
 e.stopPropagation(); setCurrentSlide(index); 
}}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'w-8 bg-[#0F7A4A]' : 'w-4 bg-white/50 hover:bg-white/70'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
