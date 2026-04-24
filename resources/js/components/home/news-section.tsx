interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt?: string;
    url?: string;
    image?: string;
}

interface NewsSectionProps {
    news?: NewsItem[];
    dark?: boolean;
}

export default function NewsSection({ news = [], dark = false }: NewsSectionProps) {
    const defaultNews: NewsItem[] = [
        { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2026-04-25', image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg' },
        { id: 2, title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2026-04-24', image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg' },
        { id: 3, title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2026-04-23', image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg' },
        { id: 4, title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2026-04-23', image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg' },
    ];

    const newsItems = news.length > 0 ? news : defaultNews;

    return (
        <div className="w-full lg:w-2/6 p-6">
            
            <ul className="space-y-3">
                {newsItems.map((item) => (
                    <li key={item.id} className={`border-b ${dark ? 'border-gray-700' : 'border-gray-200'} pb-4 pt-4`}>
                        <a
                            href={item.url || '#'}
                            className="flex gap-3 hover:text-[#0F7A4A] transition-colors"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-45 h-23.5 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                                <span className="text-xl font-medium block line-clamp-2">
                                    {item.title}
                                </span>
                                <span className={`text-md ${dark ? 'text-gray-500 font-bold' : 'text-gray-500'}`}>
                                    {item.date}
                                </span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}