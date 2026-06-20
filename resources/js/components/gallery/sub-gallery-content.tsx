export default function SubGalleryContent() {
    return (
        <div className="md:border-r-2 md:border-r-[#0f7a4a] py-4 md:py-8">
            <div className="max-w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-4 md:mx-8">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                    <div key={i} className="aspect-video bg-cover bg-center rounded-md" style={{ backgroundImage: `url('https://picsum.photos/seed/galeri${i}/640/360')` }}></div>
                ))}
            </div>
        </div>
    );
}
