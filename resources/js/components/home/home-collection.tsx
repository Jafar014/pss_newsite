import { Link, router } from '@inertiajs/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Slide {
    id: number;
    image: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const slides: Slide[] = [
    { id: 1, image: 'https://picsum.photos/1920/1080?random=1' },
    { id: 2, image: 'https://picsum.photos/1920/1080?random=2' },
    { id: 3, image: 'https://picsum.photos/1920/1080?random=3' },
];

const products: Product[] = [
    {
        id: '1',
        name: 'PSS Sleman 2024 Home Jersey',
        price: 350000,
        image: 'https://picsum.photos/300/400?random=11',
        category: 'Jersey',
    },
    {
        id: '2',
        name: 'PSS Sleman 2024 Away Jersey',
        price: 350000,
        image: 'https://picsum.photos/300/400?random=12',
        category: 'Jersey',
    },
    {
        id: '3',
        name: 'PSS Sleman Training Kit',
        price: 450000,
        image: 'https://picsum.photos/300/400?random=13',
        category: 'Training',
    },
    {
        id: '4',
        name: 'PSS Sleman Jacket',
        price: 550000,
        image: 'https://picsum.photos/300/400?random=14',
        category: 'Outerwear',
    },
    {
        id: '5',
        name: 'PSS Sleman Scarf',
        price: 150000,
        image: 'https://picsum.photos/300/400?random=15',
        category: 'Accessories',
    },
];

function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
}

export default function HomeCollection() {
    const [current, setCurrent] = useState(0);
    const AUTO_PLAY = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, AUTO_PLAY);

        return () => clearInterval(interval);
    }, []);

    const goTo = (index: number) => setCurrent(index);
    const prev = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const next = () => setCurrent((prev) => (prev + 1) % slides.length);

    return (
        <div className="h-full w-full">
            <div
                className="relative h-[60vh] max-w-full overflow-hidden cursor-pointer"
                onClick={() => {
                    const product = products[current];

                    if (product) {
router.visit(`/toko/produk/${product.id}`);
}
                }}
            >
                    {/* Hero + Carousel  */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                            opacity: index === current ? 1 : 0,
                            zIndex: index === current ? 1 : 0,
                        }}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={(e) => {
 e.stopPropagation(); goTo(index); 
}}
                            className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                                index === current
                                    ? 'w-8 bg-[#0f7a4a]'
                                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative p-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/toko/produk/${product.id}`}
                            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-200 sm:h-56 md:h-60 lg:h-72">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-3 md:p-4">
                                <span className="text-[10px] font-semibold tracking-wide text-[#0F7A4A] uppercase md:text-xs">
                                    {product.category}
                                </span>
                                <p className="mt-1 block truncate text-sm font-bold text-[#1C1C1C] transition-colors group-hover:text-[#0F7A4A] md:text-base">
                                    {product.name}
                                </p>
                                <p className="mt-1 text-sm font-bold text-[#0F7A4A] md:text-base">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
