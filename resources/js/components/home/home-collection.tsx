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
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face',
        category: 'Jersey',
    },
    {
        id: '2',
        name: 'PSS Sleman 2024 Away Jersey',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face',
        category: 'Jaket',
    },
    {
        id: '3',
        name: 'PSS Sleman Training Kit',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
        category: 'Training',
    },
    {
        id: '4',
        name: 'PSS Sleman Jacket',
        price: 550000,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
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

/* Collection section */
export default function HomeCollection() {
    return (
        <div className="h-full w-full py-8 sm:py-10 md:pb-14 [content-visibility:auto] [contain-intrinsic-size:auto_300px]">
            <div
                className="relative aspect-[16/6] lg:aspect-auto lg:h-[60vh] max-w-full overflow-hidden cursor-pointer"
                onClick={() => {
                    router.visit('/toko');
                }}
            >
                    {/* Banner */}
                <img
                    src="https://images.pexels.com/photos/15306470/pexels-photo-15306470.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Promosi Baju"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="relative px-8 pt-16 pb-8">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 md:gap-10 max-w-6xl mx-auto">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/toko/produk/${product.id}`}
                            className="relative block overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow hover:shadow-lg cursor-pointer aspect-[3/4]"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <span className="absolute bottom-4 italic left-0 right-0 text-center font-calcio-italiano lg:text-2xl text-[#f5f5f5] md:text-sm">
                                {product.category}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
