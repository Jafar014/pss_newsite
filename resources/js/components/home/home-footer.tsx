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
        { name: 'X', url: '#', icon: Twitter },
        { name: 'Linkedin', url: '#', icon: Linkedin },
    ],
    
}: HomeFooterProps) {
    return (
        <footer className="w-full bg-black text-white">
            <div className="mx-auto max-w-full">
                <div className="border-t border-white/10">
                    <div className="flex flex-wrap items-center justify-center gap-x-4  p-8 text-xs text-white/50 border-b-2 border-[#f5f5f5]/25 ">
                        
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

                <div className="h-[40vh] p-8 border-b-2 border-[#f5f5f5]/25">
                    
                </div>

                <div className="flex flex-wrap w-full h-[15vh] justify-center gap-8 py-8 md:py-10 border-b-2 border-[#f5f5f5]/25">
                    <span className="text-sm sm:text-lg md:text-xl">Partner Resmi</span>
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
