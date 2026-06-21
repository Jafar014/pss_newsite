import { useState, useEffect, useCallback } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Newspaper, Users, Settings, LogOut, ChevronDown, Images, Trophy, Volleyball, Clock } from 'lucide-react';

const blockedHrefs = ['/admin/galeri', '/admin/matchday/lineup', '/admin/matchday/statistik'];

const topItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Berita', href: '/admin/berita', icon: Newspaper },
    { label: 'Galeri', href: '/admin/galeri', icon: Images },
    { label: 'Sejarah', href: '/admin/sejarah', icon: Clock },
];

const dropdowns = [
    {
        label: 'Tim',
        icon: Users,
        items: [
            { label: 'Staff', href: '/admin/staff' },
            { label: 'Pemain', href: '/admin/pemain' },
        ],
    },
    {
        label: 'Kompetisi',
        icon: Trophy,
        items: [
            { label: 'Klasemen', href: '/admin/kompetisi/klasemen' },
            { label: 'Jadwal & Hasil', href: '/admin/kompetisi/jadwal' },
        ],
    },
    {
        label: 'Matchday',
        icon: Volleyball,
        items: [
            { label: 'Line Up', href: '/admin/matchday/lineup' },
            { label: 'Statistik', href: '/admin/matchday/statistik' },
        ],
    },
];

export default function AdminSidebar() {
    const { url } = usePage();
    const hasActiveSubmenu = (label: string) =>
        dropdowns.find((d) => d.label === label)?.items.some((item) => url === item.href) ?? false;

    const [manuallyOpened, setManuallyOpened] = useState<string | null>(null);
    const [toast, setToast] = useState<string | null>(null);

    useEffect(() => {
        if (manuallyOpened && !hasActiveSubmenu(manuallyOpened)) {
            setManuallyOpened(null);
        }
    }, [url]);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const toggleDropdown = (label: string) => {
        if (hasActiveSubmenu(label)) return;
        setManuallyOpened((prev) => (prev === label ? null : label));
    };

    const isDropdownOpen = (label: string) => hasActiveSubmenu(label) || manuallyOpened === label;

    const handleNav = (href: string, label: string) => {
        if (blockedHrefs.includes(href)) {
            setToast(label);
        }
    };

    return (
        <>
            <aside className="w-64 bg-[#0F7A4A] text-[#F5F5F5] min-h-screen flex flex-col shrink-0">
                <div className="px-5 py-6 border-b border-[#f5f5f5] flex items-center gap-2">
                    <img src="/pssLogo.webp" alt="PSS" className="w-7 h-auto" />
                    <p className="text-xl font-semibold">WEB PANEL</p>
                </div>

                <nav className="flex-1 p-2 space-y-1">
                    {Array.from({ length: Math.max(topItems.length, dropdowns.length) }, (_, i) => (
                        <div key={i} className="space-y-1">
                            {topItems[i] && (() => {
                                const { label, href, icon: Icon } = topItems[i];
                                const a = url === href;
                                return (
                                    <Link
                                        href={href}
                                        onClick={(e) => { if (blockedHrefs.includes(href)) { e.preventDefault(); handleNav(href, label); } }}
                                        className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${a ? 'bg-[#F5F5F5] text-[#0F7A4A] font-medium' : 'text-[#F5F5F5] hover:bg-[#1C1C1C]/40'}`}
                                    >
                                        <Icon className={`w-5 h-5 ${a ? 'text-[#0F7A4A]' : 'text-[#F5F5F5]'}`} />
                                        {label}
                                    </Link>
                                );
                            })()}
                            {dropdowns[i] && (
                                <DropdownSection label={dropdowns[i].label} icon={dropdowns[i].icon} items={dropdowns[i].items} isOpen={isDropdownOpen(dropdowns[i].label)} onToggle={() => toggleDropdown(dropdowns[i].label)} currentUrl={url} onNav={handleNav} />
                            )}
                        </div>
                    ))}
                </nav>

                <div className="p-2 border-t border-[#f5f5f5]">
                    <Link
                        href="/admin/settings"
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                            url === '/admin/settings'
                                ? 'bg-[#F5F5F5] text-[#0F7A4A] font-medium'
                                : 'text-[#F5F5F5] hover:bg-[#1c1c1c]/40'
                        }`}
                    >
                        <Settings className={`w-5 h-5 ${url === '/admin/settings' ? 'text-[#0F7A4A]' : 'text-[#F5F5F5]'}`} />
                        Settings
                    </Link>
                    <Link
                        href="/admin/logout"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-[#F5F5F5] hover:bg-[#1C1C1C]/40 transition-colors"
                    >
                        <LogOut className="w-5 h-5 text-[#F5F5F5]" />
                        Logout
                    </Link>
                </div>
            </aside>

            {toast && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setToast(null)} />
                    <div className="relative bg-[#f5f5f5] rounded-2xl shadow-2xl px-8 pt-6 pb-0 max-w-sm w-full text-center animate-in fade-in zoom-in duration-200">
                        <p className="text-[#1c1c1c] text-xl font-semibold uppercase tracking-wider">
                            Fitur Belum Tersedia
                        </p>
                        <p className="text-[#1c1c1c]/60 text-sm mt-2 mb-4">
                            Menu <span className="font-semibold text-[#0f7a4a]">{toast}</span> masih dalam pengembangan.
                        </p>
                        <div className="w-full h-1 bg-[#1c1c1c]/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#0f7a4a] rounded-full"
                                style={{ animation: 'shrink-width 3s linear forwards' }}
                            />
                        </div>
                        <style>{`
                            @keyframes shrink-width {
                                from { width: 100%; }
                                to { width: 0%; }
                            }
                        `}</style>
                    </div>
                </div>
            )}
        </>
    );
}

function DropdownSection({ label, icon: Icon, items, isOpen, onToggle, currentUrl, onNav }: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    items: { label: string; href: string }[];
    isOpen: boolean;
    onToggle: () => void;
    currentUrl: string;
    onNav: (href: string, label: string) => void;
}) {
    return (
        <div>
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-[#F5F5F5] hover:bg-[#1C1C1C]/40 transition-colors"
            >
                <Icon className="w-5 h-5 text-[#F5F5F5]" />
                <span className="flex-1 text-left">{label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 mt-0.5' : 'max-h-0 opacity-0'
            }`}>
                <div className="ml-2 space-y-1">
                    {items.map((item) => {
                        const active = currentUrl === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => { if (blockedHrefs.includes(item.href)) { e.preventDefault(); onNav(item.href, item.label); } }}
                                className={`block pl-10 pr-3 py-3 rounded-lg text-sm transition-colors ${
                                    active
                                        ? 'bg-[#F5F5F5] text-[#0F7A4A] font-medium'
                                        : 'text-[#F5F5F5] hover:bg-[#1C1C1C]/40'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
