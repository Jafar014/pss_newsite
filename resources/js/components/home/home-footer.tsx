interface Social {
    name: string;
    url: string;
}

interface HomeFooterProps {
    dark?: boolean;
    copyright?: string;
    socials?: Social[];
}

export default function HomeFooter({
    dark = false,
    copyright = '2026 Your Company. All rights reserved.',
    socials = [
        { name: 'Twitter', url: '#' },
        { name: 'LinkedIn', url: '#' },
    ],
}: HomeFooterProps) {
    return (
        <footer className="w-full bg-[#252525] py-10 sm:py-12">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h3 className="mb-3 text-xl font-bold text-brand-orange sm:text-2xl">
                            Logo
                        </h3>
                        <p className="text-sm text-white/70 sm:text-base">
                            Building amazing experiences since day one.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base">
                            Quick Links
                        </h4>
                        <ul className="space-y-1 sm:space-y-2">
                            <li>
                                <a href="#about" className="text-sm text-white/70 hover:text-brand-orange transition-colors sm:text-base">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-sm text-white/70 hover:text-brand-orange transition-colors sm:text-base">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-sm text-white/70 hover:text-brand-orange transition-colors sm:text-base">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-[#f5f5f5] sm:mb-4 sm:text-base">
                            Follow Us
                        </h4>
                        <ul className="space-y-1 sm:space-y-2">
                            {socials.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/70 hover:text-brand-orange transition-colors sm:text-base"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/50 sm:mt-8 sm:pt-8 sm:text-sm">
                    {copyright}
                </div>
            </div>
        </footer>
    );
}