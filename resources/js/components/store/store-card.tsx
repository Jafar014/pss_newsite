import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

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

const categoryMap: Record<string, string> = {
    Aksesoris: 'Accessories',
};

interface StoreCardProps {
    category: string;
    sort: string;
    searchQuery: string;
}

export default function StoreCard({ category, sort, searchQuery }: StoreCardProps) {
    const ITEMS_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (category !== 'Semua') {
            const mapped = categoryMap[category] || category;
            result = result.filter((p) => p.category === mapped);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q),
            );
        }

        switch (sort) {
            case 'Termurah':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'Termahal':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'Nama A-Z':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Nama Z-A':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        return result;
    }, [category, sort, searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const safePage = Math.min(currentPage, Math.max(1, totalPages));
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
    );

    const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
    const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

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
                                    loading="lazy"
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
                    {totalPages > 1 && (
                        <Pagination className="mt-8">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={prevPage}
                                        className={safePage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                        text="Sebelumnya"
                                    />
                                </PaginationItem>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            isActive={safePage === page}
                                            onClick={() => setCurrentPage(page)}
                                            className="cursor-pointer"
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={nextPage}
                                        className={safePage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                        text="Selanjutnya"
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
            </div>
        </section>
    );
}
