interface ContentSection {
    title: string;
    description: string;
    icon: 'star' | 'zap';
}

interface HomeContentProps {
    sections?: ContentSection[];
    dark?: boolean;
}

export default function HomeContent({
    sections = [
        {
            title: 'Feature One',
            description: 'Experience our first amazing feature that will change the way you work.',
            icon: 'star',
        },
        {
            title: 'Feature Two',
            description: 'Our second feature helps you achieve more with less effort.',
            icon: 'zap',
        },
    ],
    dark = false,
}: HomeContentProps) {
    return (
        <section id="about" className="w-full bg-[#1C1C1C] py-16 sm:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-center text-2xl font-bold text-[#1C1C1C] sm:mb-12 sm:text-3xl lg:text-4xl">
                    Our Features
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="w-full rounded-xl bg-white p-6 shadow-lg sm:p-8"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F7A4A] text-white sm:h-14 sm:w-14">
                                {section.icon === 'star' ? (
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-[#1C1C1C] sm:text-xl">
                                {section.title}
                            </h3>
                            <p className="text-sm text-[#1C1C1C]/70 sm:text-base">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}