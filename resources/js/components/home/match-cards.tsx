import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { usePage } from '@inertiajs/react';

interface FixtureData {
    id: string;
    gameweek: string;
    date: string;
    homeTeam: string;
    homeTeamLogo: string | null;
    awayTeam: string;
    awayTeamLogo: string | null;
    homeScore: number | null;
    awayScore: number | null;
    venue: string;
    status: string;
}

export default function MatchCards(_props: Record<string, unknown>) {
    const { fixtures } = usePage<{ fixtures: FixtureData[] }>().props;
    const isFinal = (f: FixtureData) => f.homeTeam === 'GARUDAYAKSA FC' || f.awayTeam === 'GARUDAYAKSA FC';
    const cards = fixtures
        ? [...fixtures].sort((a, b) => {
              if (isFinal(a)) return 1;
              if (isFinal(b)) return -1;
              return (parseInt(a.gameweek) || 0) - (parseInt(b.gameweek) || 0);
          })
        : [];

    let closestIdx = 0;
    if (cards.length) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let closestDiff = Infinity;
        cards.forEach((card, i) => {
            const d = new Date(card.date);
            d.setHours(0, 0, 0, 0);
            const diff = Math.abs(d.getTime() - today.getTime());
            if (diff < closestDiff) {
                closestDiff = diff;
                closestIdx = i;
            }
        });
    }
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const child = el.children[closestIdx] as HTMLElement;
        if (child) {
            el.scrollLeft = child.offsetLeft - el.clientWidth / 2 + child.offsetWidth / 2;
        }
        checkScroll();
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
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
                    className="flex flex-nowrap gap-4 overflow-x-auto px-8 md:px-12 scroll-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="grid grid-rows-5 aspect-[5/6] min-w-[260px] w-1/4 overflow-hidden px-6 py-3 shadow-sm bg-[#ffffff] shrink-0 border border-[#1c1c1c]"
                        >
                            {/* Trophy */}
                            <div className="flex flex-col items-center justify-center gap-1">
                                <img src="https://assets.ileague.id/assets/img/competition-logo/89.png" alt="Pegadaian Championship" loading="lazy" className="h-8 object-contain" />
                                <p className="text-sm font-bold text-[#1c1c1c] uppercase">
                                    {card.homeTeam === 'GARUDAYAKSA FC' || card.awayTeam === 'GARUDAYAKSA FC' ? 'FINAL' : `Matchday ${card.gameweek}`}
                                </p>
                            </div>

                            {/* Logo */}
                            <div className="mt-0 -ml-2" style={{fontSize: 0}}>
                                <img src={card.homeTeamLogo ?? undefined} alt="" loading="lazy" className="inline-block h-20" />
                                <img src={card.awayTeamLogo ?? undefined} alt="" loading="lazy" className="inline-block h-20 -ml-6" />
                            </div>

                            {/* Skor */}
                            <div className="flex flex-col items-center justify-center mt-6 gap-0.5 px-2 text-[10px]">
                                <div className="flex w-full items-center justify-between">
                                    <span className="font-calcio-italiano text-lg md:text-lg lg:text-2xl text-[#1C1C1C] uppercase">{card.homeTeam}</span>
                                    <span className="font-calcio-italiano text-lg md:text-lg lg:text-2xl text-[#1C1C1C]">{card.homeScore ?? 'X'}</span>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <span className="font-calcio-italiano text-xl md:text-xl lg:text-2xl text-[#1C1C1C] uppercase">{card.awayTeam}</span>
                                    <span className="font-calcio-italiano text-xl md:text-xl lg:text-2xl text-[#1C1C1C]">{card.awayScore ?? 'X'}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col items-start justify-center px-2 mt-4 uppercase">
                                <p className="text-xs md:text-[13px] font-bold text-gray-500">{card.date}</p>
                                <p className="text-xs md:text-[13px] font-bold text-gray-500">{card.venue}</p>
                            </div>

                            {/* Tombol */}
                            <div className="flex items-center justify-center">
                                <a href="/kompetisi/week/1" className="inline-flex items-center gap-1 px-3 py-3 hover:bg-[#0f7a4a] text-[#0f7a4a] text-[10px] md:text-xs uppercase rounded-full bg-[#f5f5f5] hover:text-[#f5f5f5] border border-[#0f7a4a] transition-all duration-200 cursor-pointer font-bold">
                                    Laporan Pertandingan
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Kontrol */}
                <div className="flex items-center justify-between px-8 md:px-12 mt-4">
                    <a
                        href="/kompetisi/"
                        className="inline-flex items-center gap-1 px-4 md:px-6 h-10 md:h-14 text-[10px] md:text-xs uppercase rounded-full
                         bg-[#f5f5f5] hover:bg-[#0f7a4a] text-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] transition-all duration-200 cursor-pointer font-bold"
                    >
                        Kalender
                    </a>
                     <div className="flex gap-2 md:gap-3">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                             className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-[#0f7a4a] shadow-lg transition-all hover:bg-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#f5f5f5] text-[#0f7a4a] shadow-lg transition-all hover:bg-[#0f7a4a] hover:text-[#f5f5f5] border border-[#0f7a4a] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
