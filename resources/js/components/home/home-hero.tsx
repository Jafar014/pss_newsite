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
            <div className="relative h-screen">
                <div
                    className="h-full w-full bg-[url(https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=1920&auto=format&fit=crop)] bg-cover bg-center bg-no-repeat"
                />

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
