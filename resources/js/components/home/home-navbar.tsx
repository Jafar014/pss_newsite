import { Link } from '@inertiajs/react';
import { ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
    {
        label: 'Berita',
        href: '/berita',
    },
    {
        label: 'Klub',
        children: [
            { label: 'Sejarah', href: '/sejarah' },
        ],
    },
    {
        label: 'Skuad',
        href: '/skuad',
    },
    {
        label: 'Kompetisi',
        href: '/kompetisi',
    },
    {
        label: 'Galeri',
        href: '/galeri',
    },
    {
        label: 'Toko',
        href: '/toko',
    },
];

function NavItem({
    item,
    isMobile = false,
}: {
    item: (typeof navItems)[number];
    isMobile?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);

    if (item.children) {
        return (
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex w-full items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:text-[#EFBF04] transition-colors ${
                        isMobile ? '' : 'lg:w-auto'
                    }`}
                >
                    <span>{item.label}</span>
                    <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>
                {isOpen && (
                    <div className="mt-1 space-y-1 bg-[#EFBF04]">
                        {item.children.map((child, index) => (
                            <Link
                                key={index}
                                href={child.href}
                                className="block px-5 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm text-black hover:bg-[#0F7A4A] hover:text-white transition-colors"
                            >
                                {child.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href || '#'}
            className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:text-[#EFBF04] transition-colors ${
                isMobile ? '' : 'lg:inline-block'
            }`}
        >
            {item.label}
        </Link>
    );
}

export default function HomeNavbar({ transparent }: { transparent?: boolean }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!transparent) return;
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [transparent]);

    return (
        <nav
            className={`fixed font-calcio-italiano text-2xl left-0 right-0 top-0 z-50 flex h-14 sm:h-16 w-full items-center justify-between px-3 sm:px-4 lg:px-6 xl:px-8 transition-all duration-300 md:h-20 lg:h-24 ${
                transparent && !scrolled
                    ? 'bg-transparent'
                    : 'bg-[#0f7a4a]/95 shadow-lg backdrop-blur-md'
            }`}
        >
            <Link href="/" className="flex items-center shrink-0">
                <img
                    src="/pssLogoNegatif.webp"
                    alt="PSS Logo"
                    className="h-6 w-auto sm:h-8 md:h-12 lg:h-14 xl:h-16"
                />
            </Link>

            <div className="hidden items-center gap-1 lg:flex lg:gap-2">
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.children ? (
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-2 lg:px-3 xl:px-4 py-6 lg:py-7 xl:py-8 text-sm lg:text-base xl:text-lg font-medium text-white hover:text-[#EFBF04] cursor-pointer">
                                    {item.label}
                                    <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                                </button>
                                <div className="absolute left-0 top-full hidden min-w-[180px] bg-[#EFBF04] group-hover:block">
                                    {item.children.map((child, childIndex) => (
                                        <Link
                                            key={childIndex}
                                            href={child.href}
                                            className="block px-4 py-2.5 lg:py-3 text-sm lg:text-base text-black hover:bg-[#0F7A4A] hover:text-white"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={item.href || '#'}
                                className="px-2 lg:px-3 xl:px-4 py-6 lg:py-7 xl:py-9 text-sm lg:text-base xl:text-lg font-medium text-white hover:text-[#EFBF04] cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-1.5 sm:p-2 text-white cursor-pointer">
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[260px] sm:w-[280px] bg-[#0f7a4a] p-0 cursor-pointer"
                    >
                        <div className="flex flex-col py-4 sm:py-6 max-h-screen overflow-y-auto">
                            {navItems.map((item, index) => (
                                <NavItem key={index} item={item} isMobile />
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
