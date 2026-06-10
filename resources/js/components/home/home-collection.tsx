import { Link, router } from '@inertiajs/react';

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
        image: 'https://picsum.photos/300/400?random=11',
        category: 'Jersey',
    },
    {
        id: '2',
        name: 'PSS Sleman 2024 Away Jersey',
        price: 350000,
        image: 'https://picsum.photos/300/400?random=12',
        category: 'Jaket',
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

/* IDR format */
function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
}

/* Collection section */
export default function HomeCollection() {
    return (
        <div className="h-full w-full [content-visibility:auto] [contain-intrinsic-size:auto_300px]">
            <div
                className="relative aspect-[16/6] lg:aspect-auto lg:h-[60vh] max-w-full overflow-hidden cursor-pointer"
                onClick={() => {
                    router.visit('/toko');
                }}
            >
                    {/* Banner */}
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-300">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase md:text-2xl lg:text-4xl">
                        Banner
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 md:text-sm">
                        <span className="md:hidden">640 x 200 px</span>
                        <span className="hidden md:inline">1920 x 600 px</span>
                    </span>
                </div>
            </div>

            <div className="relative p-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/toko/produk/${product.id}`}
                            className="relative block overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow hover:shadow-lg cursor-pointer last:hidden md:last:block aspect-[3/4]"
                        >
                            <span className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase md:text-sm">
                                    Gambar {product.category}
                                </span>
                                <span className="text-[10px] font-medium text-gray-400">
                                    <span className="md:hidden">300 x 400 px</span>
                                    <span className="hidden md:inline">400 x 533 px</span>
                                </span>
                            </span>
                            <span className="absolute bottom-4 italic left-0 right-0 text-center font-calcio-italiano lg:text-2xl text-[#1C1C1C] md:text-sm">
                                {product.category}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
