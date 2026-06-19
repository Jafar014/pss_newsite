import { Instagram, Facebook, Youtube } from 'lucide-react';

interface Social {
    name: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface HomeFooterProps {
    copyright?: string;
    socials?: Social[];
}

export default function HomeFooter({
    copyright = '© 2026 PSS Sleman. All rights reserved.',
    socials = [
        { name: 'Instagram', url: 'https://www.instagram.com/pssleman/', icon: Instagram },
        { name: 'Facebook', url: 'https://www.facebook.com/PSSlemanOfficial/', icon: Facebook },
        { name: 'Youtube', url: 'https://www.youtube.com/@PSS_SLEMAN1976', icon: Youtube },
        { name: 'X', url: 'https://x.com/PSSleman', icon: () => <svg className="size-3 sm:size-3.5 xl:size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>,}
    ],
}: HomeFooterProps) {
    const sponsorText = 'font-calcio-italiano text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#1c1c1c]/80';

    return (
        <footer className="w-full bg-[#f5f5f5] text-[#1c1c1c] min-h-[calc(100dvh-64px)] sm:min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-96px)] [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
            <div className="mx-auto max-w-full min-h-full flex flex-col">
                <div className="border-[#1c1c1c]/10 w-full border-b flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center gap-8 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="grid grid-cols-2 sm:flex items-center justify-items-center sm:justify-center gap-x-5 gap-y-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-12">
                            <span className={sponsorText}>Sponsor 1</span>
                            <span className={sponsorText}>Sponsor 2</span>
                        </div>
                        <div className="grid grid-cols-2 sm:flex items-center justify-items-center sm:justify-center gap-x-5 gap-y-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-12">
                            <span className={sponsorText}>Sponsor 3</span>
                            <span className={sponsorText}>Sponsor 4</span>
                            <span className={sponsorText}>Sponsor 5</span>
                            <span className={sponsorText}>Sponsor 6</span>
                        </div>
                        <div className="grid grid-cols-2 sm:flex items-center justify-items-center sm:justify-center gap-x-5 gap-y-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-12">
                            <span className={sponsorText}>Sponsor 7</span>
                            <span className={sponsorText}>Sponsor 8</span>
                            <span className={sponsorText}>Sponsor 9</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1c1c1c]/10 bg-[#1c1c1c] text-[#f5f5f5]">
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 md:py-5 gap-2 sm:gap-4 md:gap-0">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                            {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-7 sm:size-8 md:size-9 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[#1c1c1c] transition-colors"
                                aria-label={social.name}
                            >
                                {social.icon && <social.icon className="size-3 sm:size-3.5 md:size-4" />}
                            </a>
                        ))}
                        </div>
                        <img src="/pssLogoNegatif.webp" alt="PSS Sleman" loading="lazy" className='w-8 sm:w-10 md:w-12 lg:w-14 h-auto'/>
                        <div className="text-center sm:text-right">
                            <p className="text-[10px] sm:text-[11px] md:text-xs font-bold text-white/50">Fanmade</p>   
                            <p className="text-[10px] sm:text-[11px] md:text-xs text-white/50 mt-0.5 sm:mt-1">{copyright}</p>
                            <p className="text-[10px] sm:text-[11px] md:text-xs text-white/50 mt-0.5 sm:mt-1">Disclaimer</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
