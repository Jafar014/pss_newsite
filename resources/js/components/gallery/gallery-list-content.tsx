import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface GalleryItem {
    id: number;
    title: string;
    matchday: string;
}

const galleryData: GalleryItem[] = [
    { id: 1, title: "Matchday 1: PSS vs Opponent 1", matchday: "1" },
    { id: 2, title: "Matchday 2: PSS vs Opponent 2", matchday: "2" },
    { id: 3, title: "Matchday 3: PSS vs Opponent 3", matchday: "3" },
    { id: 4, title: "Matchday 4: PSS vs Opponent 4", matchday: "4" },
    { id: 5, title: "Matchday 5: PSS vs Opponent 5", matchday: "5" },
    { id: 6, title: "Matchday 6: PSS vs Opponent 6", matchday: "6" },
    { id: 7, title: "Matchday 7: PSS vs Opponent 7", matchday: "7" },
    { id: 8, title: "Matchday 8: PSS vs Opponent 8", matchday: "8" },
    { id: 9, title: "Matchday 9: PSS vs Opponent 9", matchday: "9" },
    { id: 10, title: "Matchday 10: PSS vs Opponent 10", matchday: "10" },
];

export default function GalleryListContent() {
    const ITEMS_PER_PAGE = 4;
    const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentGallery = galleryData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
    const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

    return (
        <div className="w-full py-8">
            <div className="mx-auto max-w-7xl grid grid-cols-2 py-4 gap-x-8 gap-y-4 px-16">
                {currentGallery.map((item) => (
                    <div
                        key={item.id}
                        className="w-full grid grid-rows-2 h-[40vh] border-[#0f7a4a] py-4 cursor-pointer group"
                    >
                        <Link
                            href={`/galeri/${item.matchday}`}
                            className="group cursor-pointer h-61"
                        >
                            <div className="row-span-2 mx-4">
                                <div className="bg-gray-400 h-60">
                                    <p className="text-center">Image here</p>
                                </div>
                            </div>
                            <div className=""></div>
                            <div className="mx-4 mt-2">
                                <span className="text-[#1c1c1c] font-calcio-italiano text-2xl group-hover:text-[#0f7a4a] transition-colors cursor-pointer">
                                    {item.title}
                                </span>
                            </div>
                        </Link>
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
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                text="Sebelumnya"
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    isActive={currentPage === page}
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
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                text="Selanjutnya"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}