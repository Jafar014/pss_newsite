import { router } from '@inertiajs/react';

/* Hero slide */
const slide = {
    id: 1,
    title: 'PSS Sleman Raih Kemenangan Telak di Markas Lawan',
};

/* Hero */
export default function HomeHero() {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#1C1C1C] cursor-pointer"
            onClick={() => router.visit(`/berita/${slide.id}`)}
        >
            <div className="relative h-[70vh] md:h-[60vh] lg:h-[87vh]">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-300">
                    <span className="text-2xl font-bold tracking-widest text-gray-500 uppercase md:text-4xl">
                        Banner Hero
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 md:text-sm">
                        <span className="md:hidden">640 x 360 px</span>
                        <span className="hidden md:inline">1920 x 1080 px</span>
                    </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                <div className="absolute bottom-4 left-0 right-18 z-20 p-4 md:bottom-16 md:p-8 lg:p-12">
                    <div className="mx-auto max-w-7xl ">
                        <h2 className=" text-sm font-calcio-italiano text-[#f5f5f5] uppercase md:text-3xl tracking-wide lg:text-5xl">
                            {slide.title}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
