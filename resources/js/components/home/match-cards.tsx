import { useRef, useState, useEffect } from 'react';

const cards = Array.from({ length: 10 }, (_, i) => ({
    matchday: i + 1,
    date: 'Kamis 11 Juni 26 - 19:00 WIB',
    venue: 'Maguwoharjo, Sleman',
}));

export default function MatchCards() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', checkScroll);
        return () => el.removeEventListener('scroll', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.querySelector('div');
        if (!card) return;
        const cardWidth = card.getBoundingClientRect().width;
        const gap = 16;
        const amount = cardWidth + gap;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative z-10 mt-8 pb-6 sm:pb-8 md:mt-10 md:pb-10 overflow-hidden">
            <div className="relative">

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex flex-nowrap gap-4 overflow-hidden px-8 md:px-12"
                >
                    {cards.map((card) => (
                        <div
                            key={card.matchday}
                            className="grid grid-rows-5 h-[50vh] min-w-[260px] w-1/4 overflow-hidden px-6 py-3 shadow-sm bg-[#ffffff] shrink-0"
                        >
                            {/* Trophy */}
                            <div className="flex flex-col items-center justify-center gap-1">
                                <svg className="h-8 w-8 text-[#0F7A4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 9 6 9" />
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 18 9 18 9" />
                                    <path d="M4 22h16" />
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                                </svg>
                                <p className="text-[10px] md:text-sm font-bold text-gray-500/70 uppercase">Matchday {card.matchday}</p>
                            </div>

                            {/* Logo */}
                            <div className="flex items-center justify-start pl-2 gap-2 mt-2">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[10px] md:text-sm font-bold text-gray-500 uppercase shadow-inner">H</span>
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[10px] md:text-sm font-bold text-gray-500 uppercase shadow-inner">A</span>
                            </div>

                            {/* Skor */}
                            <div className="flex flex-col items-center justify-center mt-4 gap-0.5 px-2 text-[10px]">
                                <div className="flex w-full items-center justify-between">
                                    <span className="font-calcio-italiano text-sm md:text-lg lg:text-2xl text-gray-600 uppercase">HOME</span>
                                    <span className="font-calcio-italiano text-sm md:text-lg lg:text-2xl text-gray-700">X</span>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <span className="font-calcio-italiano text-sm md:text-lg lg:text-2xl text-[#0f7a4a] uppercase">AWAY</span>
                                    <span className="font-calcio-italiano text-sm md:text-lg lg:text-2xl text-[#0f7a4a]">X</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col items-start justify-center px-2 mt-4 uppercase">
                                <p className="text-[10px] md:text-[13px] font-bold text-gray-500">{card.date}</p>
                                <p className="text-[10px] md:text-[13px] font-bold text-gray-500">{card.venue}</p>
                            </div>

                            {/* Tombol */}
                            <div className="flex items-center justify-center">
                                <a href="/kompetisi/week/1" className="inline-flex items-center gap-1 px-3 py-3 hover:bg-[#0f7a4a] text-[#0f7a4a] text-[10px] md:text-xs uppercase rounded-full bg-[#f5f5f5] hover:text-[#f5f5f5] border border-[#0f7a4a] transition-all duration-200 cursor-pointer">
                                    Laporan Pertandingan
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Kontrol */}
                <div className="flex items-center justify-between px-8 md:px-12 mt-4">
                    <a
                        href="/kompetisi/jadwal"
                        className="inline-flex items-center gap-1 px-6 h-14 text-[10px] md:text-xs uppercase rounded-full
                         bg-[#f5f5f5] hover:bg-[#0f7a4a] text-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] transition-all duration-200 cursor-pointer font-semibold"
                    >
                        Jadwal Lengkap
                    </a>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                             className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-[#0f7a4a] shadow-lg transition-all hover:bg-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-[#0f7a4a] shadow-lg transition-all hover:bg-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
