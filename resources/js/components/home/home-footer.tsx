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
    const headingClass = 'font-calcio-italiano text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#1c1c1c]/70 uppercase text-center';

    return (
        <footer className="w-full bg-[#f5f5f5] text-[#1c1c1c] h-[calc(100dvh-64px)] sm:h-[calc(100dvh-80px)] lg:h-[calc(100dvh-96px)] border-t border-[#1c1c1c]/30 [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
            <div className="mx-auto max-w-full h-full flex flex-col overflow-hidden">

                {/* Sponsor Section */}
                <div className="border-[#1c1c1c]/10 w-full border-b flex-1 flex flex-col min-h-0">
                    <div className="flex-1 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 px-4 sm:px-6 md:px-8 overflow-y-auto min-h-0 pt-6 sm:pt-8 md:pt-10">
                        <h2 className={headingClass}>Main Sponsor</h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/adidas/default.svg" alt="Sponsor" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto brightness-0" />
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/abstract/default.svg" alt="Sponsor" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto brightness-0" />
                        </div>
                        <h2 className={headingClass}>Premium Sponsor</h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/accenture/default.svg" alt="Sponsor" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto brightness-0" />
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/adguard/default.svg" alt="Sponsor" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto brightness-0" />
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/afterpay/default.svg" alt="Sponsor" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto brightness-0" />
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/airbnb/default.svg" alt="Sponsor" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto brightness-0" />
                            <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/algolia/default.svg" alt="Sponsor" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto brightness-0" />
                        </div>
                    </div>
                </div>

                {/* Footer 3 */}
                <div className="border-t border-[#1c1c1c]/10 bg-[#1c1c1c] text-[#f5f5f5] shrink-0">
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 md:py-5 gap-2 sm:gap-4 md:gap-0">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                            {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-7 sm:size-8 md:size-9 items-center justify-center rounded-full border border-white/20 text-[#F5F5F5] hover:bg-white hover:text-[#1c1c1c] transition-colors"
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
                            <a href="/disclaimer" className="text-[10px] sm:text-[11px] md:text-xs text-white/50 mt-0.5 sm:mt-1 underline hover:text-white transition-colors">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}