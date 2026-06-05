import { Tag } from "lucide-react";

export default function SubNewsContent() {
    return (
        <div className="w-full px-4 md:px-8 py-8 border-b-2 border-[#0f7a4a] mb-2">
            {/* Grid Konten Berita */}
            <div className="mx-auto max-w-7xl h-full grid grid-cols-2 p-2 text-black">
                {/* Gambar */}
                <div className="px-8 bg-gray-400">
                    <span className="">*image here</span>
                </div>
                {/* ---------------------------- Paragraf  ---------------------------- */}
                <div className="px-8 justify-end items-center">
                    <p className="text-justify first-letter:text-5xl text-xl first-letter:float-none first-letter:-mt-2 leading-loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iusto soluta pariatur assumenda, tenetur maiores est reiciendis neque culpa repudiandae alias nihil! Sit deserunt consequatur, voluptas aliquid temporibus dolorum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse ullam optio sunt. Numquam exercitationem magni soluta nulla quis nobis veritatis ratione impedit? Saepe est enim quaerat autem facere tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero nostrum ea vel nemo at quasi facilis voluptate necessitatibus ipsa. Dolore aliquam commodi ipsa quod illum tempore optio non voluptatum.</p>
                </div>
                <div className="py-4 pr-8 col-span-2">
                    <p className="text-justify text-xl indent-16 leading-loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iusto soluta pariatur assumenda, tenetur maiores est reiciendis neque culpa repudiandae alias nihil! Sit deserunt consequatur, voluptas aliquid temporibus dolorum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse ullam optio sunt. Numquam exercitationem magni soluta nulla quis nobis veritatis ratione impedit? Saepe est enim quaerat autem facere tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero nostrum ea vel nemo at quasi facilis voluptate necessitatibus ipsa. Dolore aliquam commodi ipsa quod illum tempore optio non voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aperiam beatae hic amet ex maiores iusto voluptatem? Alias odit tempora officia explicabo placeat nemo est harum voluptatum architecto, nulla similique.</p>
                </div>
                {/* ---------------------------- Jeda Paragraf  ---------------------------- */}
                {/* Kutipan Tokoh */}
                <div className="col-span-2 px-16 py-4 ">
                    <div className="relative bg-gray-300 p-8 italic rounded-xl">
                        <p className="font-calcio-italiano text-8xl pl-6 text-left text-[#1c1c1c]/75">"</p>
                        {/* Kutipan text */}
                        <p className="font-calcio-italiano text-3xl -mt-12 text-justify px-8 indent-16 text-[#1c1c1c]/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa explicabo eaque consequuntur animi. Reiciendis ratione, nemo minus magnam numquam accusantium corrupti non! Voluptatem omnis numquam, necessitatibus facilis esse libero?</p>
                        <p className="font-calcio-italiano text-8xl pr-12 text-right text-[#1c1c1c]/75">"</p>
                        {/* Orang yang bicara */}
                        <p className="font-calcio-italiano text-5xl  text-center text-[#1c1c1c]/75 -mt-8">Spokeperson</p>
                        {/* Waktu dan tempat */}
                        <p className="font-calcio-italiano text-3xl  text-center text-[#1c1c1c]/75 ">Tanggal dan tempat</p>
                    </div>
                </div>
                {/* ---------------------------- Lanjutan Paragraf  ---------------------------- */}
                <div className="py-4 pr-8 col-span-2">
                    <p className="text-justify text-xl indent-16 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusamus libero ipsum alias! Incidunt vel odit architecto sequi odio modi praesentium quia dolores quasi debitis illum atque, sint, nihil laudantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci asperiores ullam quos ab voluptatum accusantium, fugit debitis, dicta numquam tenetur dolore? Ipsa cumque saepe vitae iure earum vel sint.</p>
                </div>
                {/* ---------------------------- Akhir Paragraf  ---------------------------- */}
                {/* Web rujukan */}
                <div className="col-span-2 pt-8">
                    <p className="text-center font-bold text-xl">(PSSLEMAN.ID)</p>
                </div>
            </div>
        </div>
    );
}