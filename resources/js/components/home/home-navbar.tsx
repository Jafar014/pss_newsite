import { Link } from '@inertiajs/react';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';
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
                    className={`flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white hover:text-[#EFBF04] transition-colors ${
                        isMobile ? '' : 'xl:w-auto'
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
                                className="block px-6 py-2 text-sm text-black hover:bg-[#0F7A4A] hover:text-white transition-colors"
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
            className={`block px-4 py-3 text-base font-medium text-white hover:text-[#EFBF04] transition-colors ${
                isMobile ? '' : 'xl:inline-block'
            }`}
        >
            {item.label}
        </Link>
    );
}

export default function HomeNavbar() {
    return (
        <nav className="fixed font-calcio-italiano text-2xl left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-[#0f7a4a] px-4 backdrop-blur-sm md:h-20 lg:h-24 lg:px-8">
            <Link href="/" className="flex items-center">
                <img
                    src="/pssLogo.png"
                    alt="PSS Logo"
                    className="h-8 w-auto sm:h-12 md:h-14 lg:h-16"
                />
            </Link>

            <div className="hidden items-center gap-1 xl:gap-2 xl:flex ">
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.children ? (
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 py-8 text-lg font-medium text-white hover:text-[#EFBF04] xl:px-4 xl:text-xl cursor-pointer">
                                    {item.label}
                                    <ChevronDown className="h-5 w-5" />
                                </button>
                                <div className="absolute left-0 top-full hidden min-w-[180px] bg-[#EFBF04] mb-10 group-hover:block">
                                    {item.children.map((child, childIndex) => (
                                        <Link
                                            key={childIndex}
                                            href={child.href}
                                            className="block px-4 py-3 text-base text-black hover:bg-[#0F7A4A] hover:text-white"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={item.href || '#'}
                                className="px-3 py-9 text-lg font-medium text-white hover:text-[#EFBF04] xl:px-4 xl:text-xl cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 xl:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2 text-white cursor-pointer">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[280px] bg-[#0f7a4a] p-0 cursor-pointer"
                    >
                        <div className="flex flex-col py-6 ">
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
