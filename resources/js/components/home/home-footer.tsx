import { Instagram, Facebook, Youtube, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Marquee } from '../ui/marquee';

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
    marqueeLogos? : string[];
    words? : string[];
    copyright?: string;
    socials?: Social[];
    sections?: FooterSection[];
}


export default function HomeFooter({
    copyright = '© 2026 PSS Sleman. All rights reserved.',
    words= [
        "PSS SLEMAN",
        "SUPER ELANG JAWA",
        "A L E !"
    ],
    
    socials = [
        { name: 'Instagram', url: '#', icon: Instagram },
        { name: 'Facebook', url: '#', icon: Facebook },
        { name: 'Youtube', url: '#', icon: Youtube },
        { name: 'X', url: '#', icon: Twitter },
    ],
    
}: HomeFooterProps) {
    const [text, setText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
        if (!isDeleting) {
            setText(currentWord.substring(0, charIndex + 1));
            setCharIndex((prev)=> prev+1)

            if (charIndex === currentWord.length) {
                setTimeout(() => {
                setIsDeleting(true); 
                }, 1000);
            } 
        } else {
            setText(currentWord.substring(0, charIndex-1));
            setCharIndex((prev)=>prev-1);

            if (charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev+1) % words.length)
            }
        }
    }, isDeleting ? 240 : 120);
                                 
    return () => 
        clearTimeout(timeout);
}, [charIndex, isDeleting, wordIndex]);

    return (
        <footer className="w-full bg-black text-[#f5f5f5]">
            <div className="mx-auto max-w-full">
                {/* Logo partner sponsor */}
                <div className="border-[#f5f5f5]/10 w-full border-b">
                    <div className="pt-4 pb-2  sm:py-6 lg:py-8">
                        <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl text-center font-calcio-italiano">Partner Kami</p>
                    </div>
                    <Marquee className='pb-4 sm:pb-6 lg:pb-8'>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 1</span>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 2</span>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 3</span>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 4</span>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 5</span>
                        <span className='text-sm sm:text-sm lg:text-base text-white/80 border border-white/20 mx-2 sm:mx-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4'>Sponsor 6</span>
                    </Marquee>
                </div>
                
                {/*Slot 2: Logo, animasi teks, alamat, & navigasi */}
                <div className="flex flex-col lg:flex-row border-[#f5f5f5]/25">
                    {/* Kiri: Logo + animasi + alamat */}
                    <div className="w-full lg:w-2/5 px-6 sm:px-10 lg:px-16 pt-4 pb-4 lg:pt-12 lg:pb-0 flex flex-col">
                        <div className="flex flex-col items-start gap-2">
                            <img src="/pssLogoNegatif.png" alt="PSS Sleman" className='w-12 sm:w-12 h-auto'/>
                            <div className='h-[2.5rem] sm:h-[3rem] lg:h-[3.75rem] flex items-center'>
                                <p className='font-calcio-italiano text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap'>{text}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#f5f5f5]/40 text-xs sm:text-sm lg:text-sm text-justify mt-1 max-w-xs lg:max-w-sm'>Jalan Raya Randugowang, Sariharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta</p>
                        </div>
                    </div>
                    {/* Kanan: navigasi links */}
                    <div className="w-full lg:w-3/5 px-6 sm:px-6 lg:px-8 pt-2 pb-4 lg:py-14">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            <div>
                                <p className='py-2 lg:py-4 text-sm lg:text-lg font-bold text-white/80'>Klub</p>
                                <p className='text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='#kerjasama'>Kerjasama</a>
                                </p>
                                <p className='pt-2 lg:pt-2 text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='#karir'>Karir</a>
                                </p>
                                <p className='pt-2 lg:pt-2 text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/skuad'>Skuad</a>
                                </p>
                                <p className='pt-2 lg:pt-2 text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/toko'>Toko</a>
                                </p>
                            </div>
                            <div>
                                <p className='py-2 lg:py-4 text-sm lg:text-lg font-bold text-white/80'>Dokumentasi</p>
                                <p className='text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/galeri'>Galeri</a>
                                </p>
                            </div>
                            <div>
                                <p className='py-2 lg:py-4 text-sm lg:text-lg font-bold text-white/80'>Berita</p>
                                <p className='text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/berita'>Berita Terbaru</a>
                                </p>
                            </div>
                            <div>
                                <p className='py-2 lg:py-4 text-sm lg:text-lg font-bold text-white/80'>Kompetisi</p>
                                <p className='text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/kompetisi'>Jadwal</a>
                                </p>
                                <p className='pt-2 lg:pt-2 text-[#f5f5f5]/45 text-sm lg:text-base cursor-pointer hover:text-[#f5f5f5] transition-colors'>
                                    <a href='/kompetisi'>Klasemen</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media sosial dan lisensi */}
                <div className="border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-4 sm:py-6 gap-4 sm:gap-0">
                        {/* Sosial media */}
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
                            {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                                aria-label={social.name}
                            >
                                {social.icon && <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                            </a>
                        ))}
                        </div>
                        {/* Lisensi */}
                        <div className="text-center sm:text-right">
                            <p className="text-[10px] sm:text-xs font-bold text-white/50">
                                Fanmade
                            </p>   
                            <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1">
                                {copyright}
                            </p>
                            <p className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1">
                                Disclaimer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
