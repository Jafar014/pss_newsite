import { Link } from "@inertiajs/react";
import { ArrowLeft, ShoppingCart, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface Product {
    slug: string;
    name: string;
    price: string;
    description: string;
    category: string;
    sizes: string[];
    images: string[];
    stock: Record<string, number>;
}

const sizeChartData = [
    { size: 'S', panjang: '68', lebar: '48', lengan: '20' },
    { size: 'M', panjang: '71', lebar: '51', lengan: '21' },
    { size: 'L', panjang: '74', lebar: '54', lengan: '22' },
    { size: 'XL', panjang: '77', lebar: '57', lengan: '23' },
    { size: 'XXL', panjang: '80', lebar: '60', lengan: '24' },
];

export const dummyProducts: Record<string, Product> = {
    'jersey-home-2025': {
        slug: 'jersey-home-2025',
        name: 'Jersey Home 2025/26',
        price: 'RP. 250.000',
        description: 'Jersey kandang resmi PSS Sleman untuk musim 2025/26. Dibuat dari bahan premium dengan teknologi Dri-FIT yang menjaga tubuh tetap kering dan nyaman saat digunakan.',
        category: 'Jersey',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [],
        stock: { S: 12, M: 25, L: 30, XL: 15, XXL: 8 },
    },
    'jersey-away-2025': {
        slug: 'jersey-away-2025',
        name: 'Jersey Away 2025/26',
        price: 'RP. 250.000',
        description: 'Jersey tandang resmi PSS Sleman untuk musim 2025/26. Desain eksklusif dengan bahan ringan dan breathable.',
        category: 'Jersey',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [],
        stock: { S: 10, M: 20, L: 22, XL: 12, XXL: 5 },
    },
    'syall-pss': {
        slug: 'syall-pss',
        name: 'Syall PSS Sleman',
        price: 'RP. 75.000',
        description: 'Syall resmi PSS Sleman dengan warna khas Super Elang Jawa. Cocok untuk menemani tim kesayangan bertanding.',
        category: 'Aksesoris',
        sizes: ['Standar'],
        images: [],
        stock: { Standar: 50 },
    },
    'mug-pss': {
        slug: 'mug-pss',
        name: 'Mug PSS Sleman',
        price: 'RP. 50.000',
        description: 'Mug keramik eksklusif dengan logo PSS Sleman. Cocok untuk koleksi atau hadiah.',
        category: 'Souvenir',
        sizes: ['Tunggal'],
        images: [],
        stock: { Tunggal: 40 },
    },
    'topi-pss': {
        slug: 'topi-pss',
        name: 'Topi PSS Sleman',
        price: 'RP. 100.000',
        description: 'Topi baseball resmi PSS Sleman dengan bordir logo berkualitas tinggi.',
        category: 'Apparel',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [],
        stock: { S: 18, M: 22, L: 15, XL: 7 },
    },
};

export default function StoreProductDetail({ slug }: { slug: string }) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [sizeChartOpen, setSizeChartOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const product = dummyProducts[slug] || dummyProducts['jersey-home-2025'];

    const placeholderCount = 3;
    const totalImages = Math.max(product.images.length, placeholderCount);
    const currentSrc = product.images[imgIndex];

    const nextImg = () => setImgIndex((i) => (i + 1) % totalImages);
    const prevImg = () => setImgIndex((i) => (i - 1 + totalImages) % totalImages);

    return (
        <section className="w-full py-8">
            <div className="mx-auto max-w-6xl px-4">
                <Link
                    href="/toko"
                    className="inline-flex items-center gap-2 text-[#0f7a4a] hover:underline mb-6"
                >
                    <ArrowLeft size={20} />
                    Kembali ke Toko
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6 md:p-10">
                    <div className="flex flex-col gap-3">
                        <div className="relative bg-gray-300 rounded-lg h-80 md:h-112 flex items-center justify-center overflow-hidden">
                            {currentSrc ? (
                                <img src={currentSrc} alt={product.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-500 text-lg">Gambar {imgIndex + 1}</span>
                            )}
                            <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition cursor-pointer">
                                <ChevronLeft size={20} className="text-[#1c1c1c]" />
                            </button>
                            <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition cursor-pointer">
                                <ChevronRight size={20} className="text-[#1c1c1c]" />
                            </button>
                        </div>
                        <div className="flex gap-2 justify-center">
                            {Array.from({ length: totalImages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setImgIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
                                        i === imgIndex ? 'bg-[#0f7a4a]' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm text-gray-400 font-calcio-italiano uppercase tracking-wider">
                            {product.category}
                        </span>
                        <h1 className="font-calcio-italiano text-3xl md:text-5xl text-[#1c1c1c]">
                            {product.name}
                        </h1>
                        <p className="font-calcio-italiano text-2xl md:text-3xl text-[#0f7a4a] italic">
                            {product.price}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="font-calcio-italiano text-lg text-[#1c1c1c]">
                                    Ukuran
                                </span>
                                <button
                                    onClick={() => setSizeChartOpen(true)}
                                    className="flex items-center gap-1 text-sm text-[#0f7a4a] hover:underline cursor-pointer"
                                >
                                    <Ruler size={16} />
                                    Panduan Ukuran
                                </button>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((s) => {
                                    const stok = product.stock[s] ?? 0;

                                    return (
                                        <button
                                            key={s}
                                            onClick={() => setSelectedSize(s)}
                                            disabled={stok === 0}
                                            className={`w-10 h-10 border rounded-lg text-sm font-semibold transition cursor-pointer ${
                                                stok === 0
                                                    ? 'border-gray-200 text-gray-300 line-through cursor-not-allowed'
                                                    : selectedSize === s
                                                    ? 'bg-[#0f7a4a] text-white border-[#0f7a4a]'
                                                    : 'border-gray-300 text-[#1c1c1c] hover:bg-[#0f7a4a] hover:text-white'
                                            }`}
                                        >
                                            {s}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedSize && (
                                <p className="text-sm font-medium text-green-600">
                                    Sisa {product.stock[selectedSize] ?? 0} barang
                                </p>
                            )}
                        </div>

                        <button className="mt-4 flex items-center justify-center gap-2 bg-[#0f7a4a] cursor-not-allowed text-white text-xl font-semibold py-4 rounded-lg hover:bg-[#0f7a4a]/90 transition ">
                            <ShoppingCart size={24} />
                            Fitur belum tersedia
                        </button>
                    </div>
                </div>

                {sizeChartOpen && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setSizeChartOpen(false)}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="font-calcio-italiano text-2xl text-[#1c1c1c]">Panduan Ukuran</h2>
                                <button onClick={() => setSizeChartOpen(false)} className="text-gray-400 hover:text-[#1c1c1c] transition cursor-pointer">
                                    <X size={22} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Ukuran dalam sentimeter (cm)</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-center">
                                    <thead>
                                        <tr className="bg-gray-100 font-calcio-italiano text-[#1c1c1c]">
                                            <th className="p-3">Ukuran</th>
                                            <th className="p-3">Panjang</th>
                                            <th className="p-3">Lebar</th>
                                            <th className="p-3">Lengan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sizeChartData.map((row) => (
                                            <tr key={row.size} className="border-b border-gray-100">
                                                <td className="p-3 font-semibold text-[#0f7a4a]">{row.size}</td>
                                                <td className="p-3 text-gray-600">{row.panjang}</td>
                                                <td className="p-3 text-gray-600">{row.lebar}</td>
                                                <td className="p-3 text-gray-600">{row.lengan}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                onClick={() => setSizeChartOpen(false)}
                                className="mt-5 w-full py-3 bg-[#0f7a4a] text-white rounded-lg font-semibold hover:bg-[#0f7a4a]/90 transition cursor-pointer"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
