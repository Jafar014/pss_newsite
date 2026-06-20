import { router } from '@inertiajs/react';

const slide = {
    id: 1,
    title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
};

export default function HomeHero() {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#1C1C1C] cursor-pointer"
            onClick={() => router.visit(`/berita/${slide.id}`)}
        >
            <div className="relative h-[60vh] min-h-[320px] md:h-[80vh] lg:h-screen">
                <img
                    src="https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=1920&auto=format&fit=crop&fm=webp"
                    alt={slide.title}
                    fetchpriority="high"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:bottom-8 md:p-8 lg:bottom-16 lg:p-12">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-xl font-calcio-italiano text-[#f5f5f5] uppercase tracking-wide md:text-4xl lg:text-6xl">
                            {slide.title}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
