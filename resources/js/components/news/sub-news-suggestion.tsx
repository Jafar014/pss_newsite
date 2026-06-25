import { Link } from "@inertiajs/react";

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    thumbnail: string | null;
}

export default function SubNewsSuggestion({ otherNews }: { otherNews: NewsItem[] }) {
    return (
        <div className="w-full py-6 md:py-8">
            <div className="mx-auto max-w-7xl px-4">
                <h1 className="text-center font-calcio-italiano text-3xl md:text-6xl text-[#1c1c1c]">Berita Lainnya</h1>
            </div>

            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-8 px-4 md:px-8 gap-6 md:gap-x-8">
                {otherNews.length === 0 ? (
                    <div className="col-span-1 md:col-span-2 text-center py-10 text-[#1c1c1c]/60 text-sm">
                        Belum ada berita lainnya
                    </div>
                ) : (
                    otherNews.map((item) => (
                        <div key={item.id} className="group pb-4 border-b-2 border-[#0f7a4a]">
                            <Link href={`/berita/${item.slug}`} className="block">
                                <div className="bg-gray-400 aspect-video w-full flex items-center justify-center bg-cover bg-center" style={item.thumbnail ? { backgroundImage: `url('${item.thumbnail}')` } : {}}>
                                    {!item.thumbnail && <p className="text-sm md:text-base">Image here</p>}
                                </div>
                                <h2 className="text-[#1c1c1c] font-calcio-italiano text-lg md:text-2xl mt-3 group-hover:text-[#0f7a4a] transition-colors">
                                    {item.title}
                                </h2>
                            </Link>
                        </div>
                    ))
                )}

                <div className="col-span-1 md:col-span-2 mt-6 md:mt-8 text-center">
                    <a href="/berita" className="text-[#1c1c1c] underline font-calcio-italiano text-lg md:text-3xl hover:text-[#0f7a4a] transition-colors">
                        Lihat Lainnya
                    </a>
                </div>
            </div>
        </div>
    );
}