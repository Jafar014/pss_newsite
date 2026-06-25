interface NewsItem {
    id: number;
    title: string;
    content: string;
    excerpt: string | null;
    thumbnail: string | null;
    author: string | null;
}

export default function SubNewsContent({ news }: { news: NewsItem }) {
    const paragraphs = news.content.split(/\n\n+/).filter(Boolean);

    return (
        <div className="w-full px-4 md:px-8 py-6 md:py-8 border-b-2 border-[#0f7a4a] mb-2">
            <div className="mx-auto max-w-7xl">
                {paragraphs.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-2 text-black">
                        <div className="w-full aspect-video bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('${news.thumbnail || 'https://picsum.photos/seed/newscontent/800/600'}')` }} />
                        <p className="text-left text-sm md:text-xl leading-relaxed md:leading-loose first-letter:text-3xl md:first-letter:text-5xl first-letter:float-none md:first-letter:-mt-2">{paragraphs[0]}</p>
                    </div>
                )}

                {paragraphs.length > 1 && (
                    <div className="grid grid-cols-1 gap-4 lg:gap-8 p-2 text-black mt-4 lg:mt-8">
                        {paragraphs.slice(1, 2).map((paragraph, i) => (
                            <p key={i} className="text-left text-sm md:text-xl indent-8 md:indent-16 leading-relaxed md:leading-loose">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-4 lg:gap-8 p-2 text-black">
                    <div className="col-span-1 lg:col-span-2 px-2 md:px-8 lg:px-16">
                        <div className="relative bg-gray-300 p-4 md:p-6 lg:p-8 italic rounded-xl">
                            <p className="font-calcio-italiano text-4xl md:text-6xl lg:text-8xl text-left text-[#1c1c1c]/75">"</p>
                            <p className="font-calcio-italiano text-sm md:text-xl lg:text-3xl -mt-6 md:-mt-8 lg:-mt-12 text-left px-2 md:px-6 lg:px-8 indent-4 md:indent-8 lg:indent-16 text-[#1c1c1c]/75">{news.excerpt || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
                            <p className="font-calcio-italiano text-4xl md:text-6xl lg:text-8xl text-right text-[#1c1c1c]/75">"</p>
                            <p className="font-calcio-italiano text-xl md:text-3xl lg:text-5xl text-center text-[#1c1c1c]/75 -mt-4 md:-mt-6 lg:-mt-8">Spokeperson</p>
                            <p className="font-calcio-italiano text-sm md:text-xl lg:text-3xl text-center text-[#1c1c1c]/75">Tanggal dan tempat</p>
                        </div>
                    </div>
                </div>

                {paragraphs.length > 2 && (
                    <div className="grid grid-cols-1 gap-4 lg:gap-8 p-2 text-black mt-4 lg:mt-8">
                        {paragraphs.slice(2).map((paragraph, i) => (
                            <p key={i} className="text-left text-sm md:text-xl indent-8 md:indent-16 leading-relaxed md:leading-loose">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                <div className="pt-6 md:pt-8 text-center">
                    <p className="text-center font-bold text-sm md:text-xl">({news.author || 'PSSLEMAN.ID'})</p>
                </div>
            </div>
        </div>
    );
}