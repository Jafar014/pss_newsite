import { useState, useEffect } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category?: string;
}

interface StoreCollectionProps {
    products?: Product[];
}

export default function StoreCollection({
    products = [
        {
            id: '1',
            name: 'PSS Sleman 2024 Home Jersey',
            price: 350000,
            image: 'https://picsum.photos/300/400?random=1',
            category: 'Jersey',
        },
        {
            id: '2',
            name: 'PSS Sleman 2024 Away Jersey',
            price: 350000,
            image: 'https://picsum.photos/300/400?random=2',
            category: 'Jersey',
        },
        {
            id: '3',
            name: 'PSS Sleman Training Kit',
            price: 450000,
            image: 'https://picsum.photos/300/400?random=3',
            category: 'Training',
        },
        {
            id: '4',
            name: 'PSS Sleman Jacket',
            price: 550000,
            image: 'https://picsum.photos/300/400?random=4',
            category: 'Outerwear',
        },
        {
            id: '5',
            name: 'PSS Sleman Scarf',
            price: 150000,
            image: 'https://picsum.photos/300/400?random=5',
            category: 'Accessories',
        },
        {
            id: '6',
            name: 'PSS Sleman 2025 Home Jersey',
            price: 375000,
            image: 'https://picsum.photos/300/400?random=6',
            category: 'Jersey',
        },
        {
            id: '7',
            name: 'PSS Sleman 2025 Away Jersey',
            price: 375000,
            image: 'https://picsum.photos/300/400?random=7',
            category: 'Jersey',
        },
        {
            id: '8',
            name: 'PSS Sleman Training Jersey',
            price: 400000,
            image: 'https://picsum.photos/300/400?random=8',
            category: 'Training',
        },
        {
            id: '9',
            name: 'PSS Sleman Hoodie',
            price: 650000,
            image: 'https://picsum.photos/300/400?random=9',
            category: 'Outerwear',
        },
        {
            id: '10',
            name: 'PSS Sleman Cap',
            price: 120000,
            image: 'https://picsum.photos/300/400?random=10',
            category: 'Accessories',
        },
    ],
}: StoreCollectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(5);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerView(5);
            } else if (window.innerWidth >= 1024) {
                setItemsPerView(4);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 640) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);

        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const nextSlide = () => {
        if (isAnimating) {
return;
}

        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const prevSlide = () => {
        if (isAnimating) {
return;
}

        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const getVisibleProducts = () => {
        const visible = [];

        for (let i = 0; i < itemsPerView; i++) {
            visible.push(products[(currentIndex + i) % products.length]);
        }

        return visible;
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const visibleProducts = getVisibleProducts();

    return (
        <section className="w-full bg-[#0f7a4a] pb-8 md:pb-12">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <div className="relative mx-auto max-w-7xl px-4 py-8 md:py-16">
                    <h2 className="font-calcio-italiano text-3xl md:text-5xl lg:text-7xl font-bold tracking-wider text-[#0f7a4a] uppercase">
                        Koleksi
                    </h2>
                    <div className="h-1 w-20 md:w-24 bg-[#1c1c1c] mt-2" />
                </div>
            </div>

            <div className="mx-auto max-w-full sm:px-8 lg:px-3 mt-8">
                <div className="relative overflow-hidden">
                    <div
                        className={`hidden sm:flex gap-4 sm:gap-6 justify-center sm:justify-start transition-transform duration-300 ${isAnimating ? 'ease-linear' : ''}`}
                        style={{ transform: `translateX(0)` }}
                    >
                        {visibleProducts.map((product, index) => (
                            <div
                                key={`${product.id}-${currentIndex}-${index}`}
                                className="min-w-[280px] md:min-w-[280px] lg:min-w-[240px] xl:min-w-[280px] w-[280px] sm:w-[280px] lg:w-[240px] xl:w-[280px] mx-auto sm:mx-0 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
                            >
                                <div className="w-full h-72 bg-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-sm text-[#0F7A4A] font-medium">
                                        {product.category}
                                    </span>
                                    <h3 className="text-base font-bold text-[#1C1C1C] truncate">
                                        {product.name}
                                    </h3>
                                    <p className="text-xl font-bold text-[#0F7A4A] mt-2">
                                        {formatPrice(product.price)}
                                    </p>
                                    <button className="w-full mt-4 py-3 bg-[#f5f5f5] text-[#0f7a4a] border border-[#0f7a4a] rounded-xl text-base font-bold rounded hover:bg-[#0f7a4a] hover:text-white transition-colors cursor-pointer">
                                        Shopee
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="sm:hidden grid grid-cols-2 gap-3 px-3">
                        {products.slice(0, 4).map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="w-full h-48 bg-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-3">
                                    <span className="text-[10px] text-[#0F7A4A] font-medium">
                                        {product.category}
                                    </span>
                                    <h3 className="text-xs font-bold text-[#1C1C1C] truncate mt-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-bold text-[#0F7A4A] mt-1">
                                        {formatPrice(product.price)}
                                    </p>
                                    <button className="w-full mt-2 py-2 bg-[#FF7518] text-white text-xs font-bold rounded hover:bg-[#CC5E13] transition-colors cursor-pointer">
                                        Shopee
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={prevSlide}
                        className="hidden sm:flex absolute top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg group-hover:bg-white group-focus:ring-4 group-focus:ring-white">
                            <svg className="w-5 h-5 text-[#1C1C1C]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="hidden sm:flex absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg group-hover:bg-white group-focus:ring-4 group-focus:ring-white">
                            <svg className="w-5 h-5 text-[#1C1C1C]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
