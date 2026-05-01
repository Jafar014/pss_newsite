import { Instagram, Facebook, Youtube, Twitter, Linkedin, ExternalLink } from 'lucide-react';

interface Social {
    name: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface LinkItem {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: LinkItem[];
}

interface HomeFooterProps {
    copyright?: string;
    socials?: Social[];
    sections?: FooterSection[];
}

export default function HomeFooter({
    copyright = '© 2026 PSS Sleman. All rights reserved.',
    socials = [
        { name: 'Instagram', url: '#', icon: Instagram },
        { name: 'Facebook', url: '#', icon: Facebook },
        { name: 'Youtube', url: '#', icon: Youtube },
        { name: 'Twitter', url: '#', icon: Twitter },
        { name: 'Linkedin', url: '#', icon: Linkedin },
    ],
    sections = [
        {
            title: 'Tim',
            links: [
                { label: 'First Team', href: '#' },
                { label: 'Women', href: '#' },
                { label: 'Youth', href: '#' },
            ],
        },
        {
            title: 'Klub',
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Sejarah', href: '#' },
                { label: 'Struktur', href: '#' },
            ],
        },
        {
            title: 'Tiket',
            links: [
                { label: 'Beli Tiket', href: '#' },
                { label: 'Jadwal', href: '#' },
                { label: 'Stadion', href: '#' },
            ],
        },
        {
            title: 'Toko',
            links: [
                { label: 'Jersey', href: '#' },
                { label: 'Merchandise', href: '#' },
                { label: 'Membership', href: '#' },
            ],
        },
    ],
}: HomeFooterProps) {
    return (
        <footer className="w-full bg-black text-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap justify-center gap-8 py-8 md:py-10 border-b border-white/10">
                    <span className="text-sm sm:text-lg md:text-xl">Partner Resmi</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-10">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="mb-3 md:mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-6 pb-4">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-xs text-white/50">
                        
                        {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                            aria-label={social.name}
                        >
                            {social.icon && <social.icon className="h-4 w-4" />}
                        </a>
                    ))}
                    </div>
                </div>

                <div className="border-t border-white/10 py-4 text-center">
                    <p className="text-xs font-bold text-white/50 px-4">
                        Fanmade
                    </p>   
                    <p className="text-xs text-white/50 px-4 mt-1">
                        {copyright}
                    </p>
                    <p className="text-xs text-white/50 mt-1 px-4">
                        PSS Sleman - Sleman, Yogyakarta, Indonesia  
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}
