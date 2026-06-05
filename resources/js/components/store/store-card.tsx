import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Product {
    slug: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const products: Product[] = [
    {
        slug: 'jersey-home-2025',
        name: 'Jersey Home 2025/26',
        price: 250000,
        image: 'https://picsum.photos/300/400?random=21',
        category: 'Jersey',
    },
    {
        slug: 'jersey-away-2025',
        name: 'Jersey Away 2025/26',
        price: 250000,
        image: 'https://picsum.photos/300/400?random=22',
        category: 'Jersey',
    },
    {
        slug: 'jersey-third-2025',
        name: 'Jersey Third 2025/26',
        price: 275000,
        image: 'https://picsum.photos/300/400?random=23',
        category: 'Jersey',
    },
    {
        slug: 'training-kit-2025',
        name: 'Training Kit 2025/26',
        price: 350000,
        image: 'https://picsum.photos/300/400?random=24',
        category: 'Training',
    },
    {
        slug: 'jacket-2025',
        name: 'PSS Sleman Jacket',
        price: 450000,
        image: 'https://picsum.photos/300/400?random=25',
        category: 'Outerwear',
    },
    {
        slug: 'scarf-2025',
        name: 'PSS Sleman Scarf',
        price: 120000,
        image: 'https://picsum.photos/300/400?random=26',
        category: 'Accessories',
    },
    {
        slug: 'mug-pss',
        name: 'Mug PSS Sleman',
        price: 50000,
        image: 'https://picsum.photos/300/400?random=27',
        category: 'Souvenir',
    },
    {
        slug: 'hoodie-2025',
        name: 'PSS Sleman Hoodie',
        price: 350000,
        image: 'https://picsum.photos/300/400?random=28',
        category: 'Apparel',
    },
    {
        slug: 'cap-pss',
        name: 'PSS Sleman Cap',
        price: 85000,
        image: 'https://picsum.photos/300/400?random=29',
        category: 'Accessories',
    },
    {
        slug: 'keychain-pss',
        name: 'PSS Sleman Keychain',
        price: 25000,
        image: 'https://picsum.photos/300/400?random=30',
        category: 'Souvenir',
    },
    {
        slug: 'tumbler-pss',
        name: 'PSS Sleman Tumbler',
        price: 95000,
        image: 'https://picsum.photos/300/400?random=31',
        category: 'Souvenir',
    },
    {
        slug: 'jersey-retro-2024',
        name: 'Jersey Retro 2024/25',
        price: 300000,
        image: 'https://picsum.photos/300/400?random=32',
        category: 'Jersey',
    },
];

function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
}

export default function StoreCard() {
    const ITEMS_PER_PAGE = 8;
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = products.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
    );

    const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
    const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

    const getPageNumbers = () => {
        const pages: number[] = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <section className="w-full items-center justify-center pb-8">
            <div className="mx-auto max-w-7xl px-4 py-2">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {/* Kartu produk */}
                    {currentProducts.map((product) => (
                        <div
                            key={product.slug}
                            className="group relative overflow-hidden rounded-lg border transition-shadow hover:shadow-lg"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-200 sm:h-56 md:h-64 lg:h-72">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="px-3 pt-3 pb-4 font-calcio-italiano sm:px-4 sm:pt-4">
                                <Link
                                    href={`/toko/produk/${product.slug}`}
                                    className="block truncate text-base text-[#1c1c1c] transition hover:text-[#0f7a4a] sm:text-lg md:text-xl lg:text-2xl"
                                >
                                    {product.name}
                                </Link>
                                <p className="pb-1 text-sm text-[#0f7a4a] italic sm:text-base md:text-lg lg:text-xl">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                    {/* Pagination */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronLeft
                            size={20}
                            className="flex-shrink-0 text-[#1c1c1c] transition hover:text-[#0f7a4a]"
                        />
                    </button>
                    <div className="flex items-center gap-2">
                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setCurrentPage(page)}
                                className={`cursor-pointer rounded-full px-3 py-1.5 text-sm transition ${
                                    page === currentPage
                                        ? 'bg-[#0f7a4a] text-white'
                                        : 'bg-gray-200 text-[#1c1c1c] hover:bg-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronRight
                            size={20}
                            className="flex-shrink-0 text-[#1c1c1c] transition hover:text-[#0f7a4a]"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
