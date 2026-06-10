import { useState } from 'react';

interface YoutubePlayerProps {
    videoId: string;
    title?: string;
    autoplay?: boolean;
}

interface YoutubeData {
    title?: string;
    thumbnail?: string;
    author?: string;
}

export default function YoutubePlayer({
    videoId,
    title,
    autoplay = false,
}: YoutubePlayerProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoData, setVideoData] = useState<YoutubeData>({
        title: title,
    });

    return (
        <div className="relative w-full bg-[#2C2C2C]">
            <div className="w-full aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                        autoplay ? 1 : 0
                    }&rel=0&modestbranding=1`}
                    title={videoData.title || 'YouTube Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </div>
    );
}

interface YoutubeThumbnailProps {
    videoId: string;
    onClick?: () => void;
}

export function YoutubeThumbnail({
    videoId,
    onClick,
}: YoutubeThumbnailProps) {
    return (
        <button onClick={onClick} className="relative w-full h-auto bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-[#0F7A4A] focus:ring-offset-2">
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Thumbnail"
                loading="lazy"
                className="aspect-video w-full h-auto object-cover"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F7A4A] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                    <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}