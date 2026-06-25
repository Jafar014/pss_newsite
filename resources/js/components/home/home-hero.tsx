import { router } from '@inertiajs/react';

const slide = {
    id: 1,
    title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
};

export default function HomeHero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#1C1C1C]">
            <div className="relative h-[60vh] min-h-[320px] md:h-[80vh] lg:h-screen">
                <img
                    src="https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=1920&auto=format&fit=crop&fm=webp"
                    alt={slide.title}
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                <div className="absolute bottom-2 left-0 right-0 z-20 p-3 sm:p-4 md:bottom-4 md:p-8 lg:bottom-6 lg:p-12">
                    <div className="max-w-7xl">
                        <h2 className="text-base font-calcio-italiano text-[#f5f5f5] uppercase tracking-wide sm:text-lg md:text-4xl lg:text-6xl">
                            {slide.title}
                        </h2>
                        <button
                            onClick={() => router.visit(`/berita/${slide.id}`)}
                            className="mt-3 inline-flex items-center gap-1 rounded-xl bg-[#f5f5f5]/0 px-3 py-2 text-[10px] font-bold text-[#f5f5f5] uppercase transition-all duration-200 hover:bg-[#0f7a4a] hover:text-[#f5f5f5] border border-[#f5f5f5] sm:mt-4 sm:gap-1.5 sm:px-4 sm:py-2.5 sm:text-xs md:mt-6 md:gap-2 md:px-6 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-base cursor-pointer"
                        >
                            Selengkapnya
                        </button>
                        </div>
                </div>
            </div>
        </section>
    );
}
