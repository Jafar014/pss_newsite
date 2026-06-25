import { ChevronRight } from 'lucide-react';
import { useMemo } from 'react';
import { router } from '@inertiajs/react';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    thumbnail: string | null;
}

export default function HomeNews({ headlineNews }: { headlineNews: NewsItem[] }) {
    const items = useMemo(() => {
        const original = headlineNews.length ? headlineNews : [];
        if (original.length === 0) return [];
        const result = [...original];
        while (result.length < 4) {
            result.push({ ...original[result.length % original.length], id: result.length + 1000 });
        }
        return result.slice(0, 4);
    }, [headlineNews]);

    return (
        <section className="w-full relative flex flex-col lg:flex-row [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
            <div className="flex flex-col w-full lg:w-1/3 overflow-hidden bg-[#1c1c1c] border-[#1c1c1c] border-b lg:border-b-0 border-r">
                <div className="relative h-auto lg:h-[72vh] flex flex-col justify-center lg:justify-end px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 lg:pb-16">
                    <h2 className="font-calcio-italiano text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f5f5f5] uppercase tracking-wider leading-none text-center lg:text-left">
                        Headlines
                     </h2>
                </div>
            </div>

            <div className="flex flex-col w-full lg:w-2/3 bg-[#1c1c1c] overflow-y-auto right-0">
                <div className="relative flex flex-col lg:flex-row lg:w-full pb-0 lg:pb-16 h-auto lg:h-[71.5vh] lg:px-0">
                    {items.length === 0 ? (
                        <div className="w-full py-20 text-center text-[#f5f5f5]/60 text-sm">
                            Belum ada berita
                        </div>
                    ) : (
                        items.map((item, idx) => (
                            <div
                                key={item.id}
                                onClick={() => router.visit(`/berita/${item.slug}`)}
                                className="group flex flex-col w-full lg:w-1/4 relative cursor-pointer border-r-0 lg:border-r border-[#1c1c1c] border-b lg:border-b-0 overflow-hidden aspect-[4/3] lg:aspect-[3/4]"
                            >
                                <div
                                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${item.thumbnail || 'https://picsum.photos/seed/news' + (idx + 1) + '/360/270'}')` }}
                                />

                                <div className="absolute bottom-0 left-0 right-0 h-1/2
                                    bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/60 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-all duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                                    <h2 className="text-[#f5f5f5] text-sm sm:text-base md:text-lg font-bold line-clamp-2 transition-all duration-300 group-hover:translate-y-[-10px]">
                                        {item.title}
                                    </h2>
                                    <p className="text-[#f5f5f5] text-sm mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        Lihat Berita →
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="relative lg:absolute bottom-0 lg:-right-4 py-4 cursor-pointer text-right lg:text-left" >
                    <a href='/berita' className='font-calcio-italiano uppercase text-xl sm:text-2xl hover:bg-[#f5f5f5] hover:text-[#1c1c1c] hover:duration-300 p-5'>
                        lihat lainnya
                        <ChevronRight className="inline-block ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}