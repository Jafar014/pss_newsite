import { useState, useEffect } from 'react';

/* Product data */
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const products: Product[] = [
    {
        id: '1',
        name: 'PSS Sleman 2024 Home Jersey',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face&fm=webp',
        category: 'Jersey',
    },
    {
        id: '2',
        name: 'PSS Sleman 2024 Away Jersey',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face&fm=webp',
        category: 'Jaket',
    },
    {
        id: '3',
        name: 'PSS Sleman Training Kit',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face&fm=webp',
        category: 'Training',
    },
    {
        id: '4',
        name: 'PSS Sleman Jacket',
        price: 550000,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face&fm=webp',
        category: 'Outerwear',
    },
];

/* IDR format */
function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
}

/* Notifikasi popup */
function ComingSoonPopup({ show, onClose }: { show: boolean; onClose: () => void }) {
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [show, onClose]);

    if (!show) return null;

    /* Progress bar shrink animation */
    const progressStyle = {
        animation: 'shrink-width 3s linear forwards',
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="relative bg-[#f5f5f5] rounded-2xl shadow-2xl px-8 pt-6 pb-0 max-w-sm w-full text-center animate-in fade-in zoom-in duration-200">
                <p className="font-calcio-italiano text-[#1c1c1c] text-2xl uppercase tracking-wider">
                    Fitur Belum Tersedia
                </p>
                <p className="text-[#1c1c1c]/60 text-sm mt-2 mb-4">
                    Mohon maaf, fitur ini masih dalam pengembangan.
                </p>

                {/* Progress bar */}
                <div className="w-full h-1 bg-[#1c1c1c]/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#0f7a4a] rounded-full"
                        style={progressStyle}
                    />
                </div>

                <style>{`
                    @keyframes shrink-width {
                        from { width: 100%; }
                        to { width: 0%; }
                    }
                `}</style>
            </div>
        </div>
    );
}

/* Collection section */
export default function HomeCollection() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ComingSoonPopup show={showPopup} onClose={() => setShowPopup(false)} />

            <div className="h-full w-full py-8 sm:py-10 md:pb-14 [content-visibility:auto] [contain-intrinsic-size:auto_300px]">

                {/* --- Banner hero --- */}
                <div
                    className="relative aspect-[16/6] lg:aspect-auto lg:h-[60vh] max-w-full overflow-hidden cursor-pointer"
                    onClick={() => setShowPopup(true)}
                >
                    <img
                        src="https://picsum.photos/seed/collectionBanner/1920/720.webp"
                        alt="Promosi Baju"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* --- Grid produk --- */}
                <div className="relative px-8 pt-16 pb-8">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-10 max-w-6xl mx-auto">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="relative block overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow hover:shadow-lg cursor-pointer aspect-[3/4]"
                                onClick={() => setShowPopup(true)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <span className="absolute bottom-4 italic left-0 right-0 text-center font-calcio-italiano lg:text-2xl text-[#f5f5f5] md:text-sm">
                                    {product.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}