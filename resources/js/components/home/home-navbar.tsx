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
                    className={`flex w-full items-center justify-between px-6 py-5 text-lg sm:text-lg md:text-xl font-medium text-[#f5f5f5] hover:text-[#EFBF04] transition-colors ${
                        isMobile ? '' : 'lg:w-auto'
                    }`}
                >
                    <span>{item.label}</span>
                    <ChevronDown
                        className={`h-6 w-6 transition-transform ${
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
                                className="block px-7 py-4 text-base sm:text-base md:text-lg text-black hover:bg-[#0F7A4A] hover:text-white transition-colors"
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
            className={`block px-6 py-5 text-lg sm:text-lg md:text-xl font-medium text-white hover:text-[#EFBF04] transition-colors ${
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
            className={`fixed font-calcio-italiano left-0 right-0 top-0 z-50 flex h-16 sm:h-20 w-full items-center justify-between px-4 sm:px-4 lg:px-6 xl:px-8 transition-all duration-300 md:h-20 lg:h-24 ${
                transparent && !scrolled
                    ? 'bg-transparent'
                    : 'bg-[#0f7a4a] shadow-lg'
            }`}
        >
            <Link href="/" className="flex items-center shrink-0">
                <img
                    src="/pssLogo.webp"
                    alt="PSS Logo"
                    className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
                />
            </Link>

            <div className="hidden items-center gap-1 lg:flex lg:gap-2 tracking-wider">
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.children ? (
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-2 lg:px-3 xl:px-4 py-6 lg:py-7 xl:py-8 text-base lg:text-lg xl:text-xl font-medium text-white hover:text-[#EFBF04] cursor-pointer">
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
                                className="px-2 lg:px-3 xl:px-4 py-6 lg:py-7 xl:py-9 text-base lg:text-lg xl:text-xl font-medium text-white hover:text-[#EFBF04] cursor-pointer"
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
                        <button className="p-2 sm:p-2.5 text-white cursor-pointer">
                            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[320px] bg-[#0f7a4a] p-0 cursor-pointer font-calcio-italiano"
                    >
                        <div className="flex flex-col pt-10 md:pt-14 pb-4 sm:pb-6 max-h-screen overflow-y-auto divide-y divide-white/10">
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
