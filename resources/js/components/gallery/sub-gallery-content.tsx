export default function SubGalleryContent() {
    return (
        <div className="md:border-r-2 md:border-r-[#0f7a4a] py-4 md:py-8">
            <div className="max-w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-4 md:mx-8">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                    <div key={i} className="aspect-video bg-gray-400 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-medium text-gray-600 md:text-sm">
                            <span className="md:hidden">640 x 360 px</span>
                            <span className="hidden md:inline">1920 x 1080 px</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
