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
                <div className="grid grid-rows-2 border-[#f5f5f5]/10 w-full justify-center border-b">
                    <div className="mt-4">
                        <p className="sm:text-xl md:text-2xl text-center font-calcio-italiano lg:text-4xl">Partner Kami</p>
                    </div>
                    <Marquee className='py-4 -mt-4'>
                        <span className='text-red-300 border px-8 py-4'>Sponsor 1</span>
                        <span className='text-amber-300 border px-8 py-4'>Sponsor 2</span>
                        <span className='text-blue-300 border px-8 py-4'>Sponsor 3</span>
                        <span className='text-green-300 border px-8 py-4'>Sponsor 4</span>
                        <span className='text-fuchsia-300 border px-8 py-4'>Sponsor 5</span>
                        <span className='text-cyan-400 border px-8 py-4'>Sponsor 6</span>
                    </Marquee>
                </div>
                
                {/*Slot 2: Gambar atau animasi */}
                <div className="relative h-[40vh] w-full flex flex-col-2 border-[#f5f5f5]/25 ">
                    <div className="w-2/5 pt-12 px-16 grid grid-rows-2">
                        <div className="grid ">
                            <img src="../pssLogoNegatif.png" alt="PSS Sleman" className='w-12 h-auto pt-2'/>
                            <p className='font-calcio-italiano text-5xl'>{text}</p>
                        </div>
                        <div className="grid h-18">
                            <p className='text-md font-bold'>Alamat Kantor:</p>
                            <p className='text-[#f5f5f5]/40 wrap-normal w-2/3 text-sm text-justify'>Jalan Raya Randugowang, Sariharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta</p>
                        </div>
                    </div>
                    <div className="w-3/5 py-14 h-full px-8">
                        <div className="grid grid-cols-4 gap-8  h-full">
                            <div className=" px-4">
                                <p className='py-4 text-lg'>Klub</p>
                                <p className='text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='#kerjasama'>Kerjasama</a>
                                </p>
                                <p className='pt-2 text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='#karir'>Karir</a>
                                </p>
                                <p className='pt-2 text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/skuad'>Skuad</a>
                                </p>
                                <p className='pt-2 text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/toko'>Toko</a>
                                </p>
                            </div>
                            <div className="px-4">
                                <p className='py-4 text-lg '>Dokumentasi</p>
                                <p className='text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/galeri'>Galeri</a>
                                </p>
                                <p className='pt-2 text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='https://www.youtube.com/@PSS_SLEMAN1976'>Video</a>
                                </p>
                            </div>
                            <div className=" px-4">
                                <p className='py-4 text-lg'>Berita</p>
                                <p className='text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/berita'>Berita Terbaru</a>
                                </p>
                            </div>
                            <div className=" px-4">
                                <p className='py-4 text-lg'>Kompetisi</p>
                                <p className=' text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/kompetisi'>Jadwal</a>
                                </p>
                                <p className='pt-2 text-[#f5f5f5]/45 text-md cursor-pointer hover:text-[#f5f5f5]'>
                                    <a href='/kompetisi'>Klasemen</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media sosial dan lisensi */}
                <div className="border-t grid grid-cols-2 border-white/10 py-4 text-center">
                    <div className="flex flex-wrap items-start justify-start gap-x-4 py-4 px-8 text-xs text-white/50 border-[#f5f5f5]/25 ">   
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
                        <div className="text-right pt-2">
                            <p className="text-xs font-bold text-white/50 px-4">
                                Fanmade
                            </p>   
                            <p className="text-xs text-white/50 px-4 mt-1">
                                {copyright}
                            </p>
                            <p className="text-xs text-white/50 mt-1 px-4">
                                Kebijakan Privasi | FaQ | Syarat dan Ketentuan
                            </p>
                        </div>
                        
                        
                    </div>
            </div>
        </footer>
    );
}
