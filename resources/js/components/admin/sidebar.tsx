import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Newspaper, Users, Settings, LogOut, ChevronDown, Images, Trophy, Volleyball, Clock } from 'lucide-react';

// Single links
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
            { label: 'Staff', href: '/admin/tim/profil' },
            { label: 'Pemain', href: '/admin/tim/pemain' },
        ],
    },
    {
        label: 'Kompetisi',
        icon: Trophy,
        items: [
            { label: 'Klasemen', href: '/admin/kompetisi/klasemen' },
            { label: 'Hasil', href: '/admin/kompetisi/hasil' },
            { label: 'Jadwal', href: '/admin/kompetisi/jadwal' },
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
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Buka/tutup dropdown, cuma 1 dalam satu waktu
    const toggleDropdown = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    return (
        <aside className="w-64 bg-[#0F7A4A] text-[#F5F5F5] min-h-screen flex flex-col shrink-0">
            <div className="px-5 py-6 border-b border-[#f5f5f5] flex items-center gap-2">
                <img src="/pssLogo.webp" alt="PSS" className="w-7 h-auto" />
                <p className="text-xl font-semibold">WEB PANEL</p>
            </div>

            {/* Render dinamis: single + dropdown per index */}
            <nav className="flex-1 p-2 space-y-1">
                {Array.from({ length: Math.max(topItems.length, dropdowns.length) }, (_, i) => (
                    <div key={i} className="space-y-1">
                        {topItems[i] && (() => {
                            const { label, href, icon: Icon } = topItems[i];
                            const a = url === href;
                            return (
                                <Link href={href} className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${a ? 'bg-[#F5F5F5] text-[#0F7A4A] font-medium' : 'text-[#F5F5F5] hover:bg-[#1C1C1C]/40'}`}>
                                    <Icon className={`w-5 h-5 ${a ? 'text-[#0F7A4A]' : 'text-[#F5F5F5]'}`} />
                                    {label}
                                </Link>
                            );
                        })()}
                        {dropdowns[i] && (
                            <DropdownSection label={dropdowns[i].label} icon={dropdowns[i].icon} items={dropdowns[i].items} isOpen={openDropdown === dropdowns[i].label} onToggle={() => toggleDropdown(dropdowns[i].label)} currentUrl={url} />
                        )}
                    </div>
                ))}
            </nav>

            {/* Bawah: Settings & Logout */}
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
    );
}

// Dropdown dengan animasi expand
function DropdownSection({ label, icon: Icon, items, isOpen, onToggle, currentUrl }: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    items: { label: string; href: string }[];
    isOpen: boolean;
    onToggle: () => void;
    currentUrl: string;
}) {
    // Highlight parent jika ada anak aktif
    const hasActive = items.some((item) => currentUrl === item.href);

    return (
        <div>
            <button
                onClick={onToggle}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                    hasActive
                        ? 'bg-[#F5F5F5] text-[#0F7A4A] font-medium'
                        : 'text-[#F5F5F5] hover:bg-[#1C1C1C]/40'
                }`}
            >
                <Icon className={`w-5 h-5 ${hasActive ? 'text-[#0F7A4A]' : 'text-[#F5F5F5]'}`} />
                <span className="flex-1 text-left">{label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
            </button>

            {/* Animasi smooth buka/tutup */}
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
                                className={`block pl-10 pr-3 py-3 rounded-lg text-sm transition-colors ${
                                    active
                                        ? 'bg-[#1C1C1C] text-[#F5F5F5] font-medium'
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
