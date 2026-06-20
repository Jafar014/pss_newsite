import { Link } from "@inertiajs/react";
import { useRef, useState } from "react";

const items = [
    { id: 6, title: "Matchday 6: vs. Opponent 6" },
    { id: 7, title: "Matchday 7: vs. Opponent 7" },
    { id: 8, title: "Matchday 8: vs. Opponent 8" },
    { id: 9, title: "Matchday 9: vs. Opponent 9" },
    { id: 10, title: "Matchday 10: vs. Opponent 10" },
    { id: 11, title: "Matchday 11: vs. Opponent 11" },
];

export default function SubGallerySuggestion() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateButtons = () => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    const scroll = (direction: "prev" | "next") => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        const amount = direction === "prev" ? -el.clientWidth : el.clientWidth;
        el.scrollBy({ left: amount, behavior: "smooth" });
        setTimeout(updateButtons, 350);
    };

    return (
        <div className="w-full py-6 md:py-10 lg:py-12 border-t border-[#0f7a4a]/20">
            <p className="text-[#1c1c1c] text-center text-xl md:text-4xl font-bold py-2 md:py-4 lg:py-6">
                Lihat Juga
            </p>

            <div className="relative w-full px-6 md:px-4 lg:px-8">
                <button
                    onClick={() => scroll("prev")}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-[#0f7a4a]/30 text-[#0f7a4a] hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={!canScrollLeft}
                >
                    ‹
                </button>

                <div
                    ref={scrollRef}
                    onScroll={updateButtons}
                    className="overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 pb-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={`/galeri/${item.id}`}
                            className="group cursor-pointer snap-start shrink-0 w-[75vw] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-72px)/4)] xl:w-[calc((100%-96px)/5)]"
                        >
                            <div className="aspect-video bg-cover bg-center rounded-md" style={{ backgroundImage: `url('https://picsum.photos/seed/galeriS${item.id}/640/360')` }}></div>
                            <p className="text-[#1c1c1c] text-left font-bold text-sm md:text-md py-2 group-hover:text-[#0f7a4a] transition-colors">
                                {item.title}
                            </p>
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => scroll("next")}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white/80 border border-[#0f7a4a]/30 text-[#0f7a4a] hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={!canScrollRight}
                >
                    ›
                </button>
            </div>

            <a href="/galeri">
                <p className="text-[#1c1c1c] text-base md:text-2xl font-bold underline text-center hover:text-[#0f7a4a] py-4 lg:py-6">
                    Selengkapnya
                </p>
            </a>
        </div>
    );
}
