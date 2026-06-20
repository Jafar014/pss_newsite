export default function SubNewsContent() {
    return (
        <div className="w-full px-4 md:px-8 py-6 md:py-8 border-b-2 border-[#0f7a4a] mb-2">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 p-2 text-black">
                {/* Gambar */}
                <div className="w-full aspect-video bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/newscontent/800/600')" }} />

                {/* Paragraf 1 */}
                <div>
                    <p className="text-left text-sm md:text-xl leading-relaxed md:leading-loose first-letter:text-3xl md:first-letter:text-5xl first-letter:float-none md:first-letter:-mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iusto soluta pariatur assumenda, tenetur maiores est reiciendis neque culpa repudiandae alias nihil! Sit deserunt consequatur, voluptas aliquid temporibus dolorum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse ullam optio sunt. Numquam exercitationem magni soluta nulla quis nobis veritatis ratione impedit? Saepe est enim quaerat autem facere tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero nostrum ea vel nemo at quasi facilis voluptate necessitatibus ipsa. Dolore aliquam commodi ipsa quod illum tempore optio non voluptatum.</p>
                </div>

                {/* Paragraf 2 - full width */}
                <div className="order-3 col-span-1 lg:col-span-2">
                    <p className="text-left text-sm md:text-xl indent-8 md:indent-16 leading-relaxed md:leading-loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iusto soluta pariatur assumenda, tenetur maiores est reiciendis neque culpa repudiandae alias nihil! Sit deserunt consequatur, voluptas aliquid temporibus dolorum optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse ullam optio sunt. Numquam exercitationem magni soluta nulla quis nobis veritatis ratione impedit? Saepe est enim quaerat autem facere tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero nostrum ea vel nemo at quasi facilis voluptate necessitatibus ipsa. Dolore aliquam commodi ipsa quod illum tempore optio non voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aperiam beatae hic amet ex maiores iusto voluptatem? Alias odit tempora officia explicabo placeat nemo est harum voluptatum architecto, nulla similique.</p>
                </div>

                {/* Kutipan Tokoh */}
                <div className="order-4 col-span-1 lg:col-span-2 px-2 md:px-8 lg:px-16">
                    <div className="relative bg-gray-300 p-4 md:p-6 lg:p-8 italic rounded-xl">
                        <p className="font-calcio-italiano text-4xl md:text-6xl lg:text-8xl text-left text-[#1c1c1c]/75">"</p>
                        <p className="font-calcio-italiano text-sm md:text-xl lg:text-3xl -mt-6 md:-mt-8 lg:-mt-12 text-left px-2 md:px-6 lg:px-8 indent-4 md:indent-8 lg:indent-16 text-[#1c1c1c]/75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa explicabo eaque consequuntur animi. Reiciendis ratione, nemo minus magnam numquam accusantium corrupti non! Voluptatem omnis numquam, necessitatibus facilis esse libero?</p>
                        <p className="font-calcio-italiano text-4xl md:text-6xl lg:text-8xl text-right text-[#1c1c1c]/75">"</p>
                        <p className="font-calcio-italiano text-xl md:text-3xl lg:text-5xl text-center text-[#1c1c1c]/75 -mt-4 md:-mt-6 lg:-mt-8">Spokeperson</p>
                        <p className="font-calcio-italiano text-sm md:text-xl lg:text-3xl text-center text-[#1c1c1c]/75">Tanggal dan tempat</p>
                    </div>
                </div>

                {/* Lanjutan Paragraf */}
                <div className="order-5 col-span-1 lg:col-span-2">
                    <p className="text-left text-sm md:text-xl indent-8 md:indent-16 leading-relaxed md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusamus libero ipsum alias! Incidunt vel odit architecto sequi odio modi praesentium quia dolores quasi debitis illum atque, sint, nihil laudantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci asperiores ullam quos ab voluptatum accusantium, fugit debitis, dicta numquam tenetur dolore? Ipsa cumque saepe vitae iure earum vel sint.</p>
                </div>

                {/* Web rujukan */}
                <div className="order-6 col-span-1 lg:col-span-2 pt-6 md:pt-8">
                    <p className="text-center font-bold text-sm md:text-xl">(PSSLEMAN.ID)</p>
                </div>
            </div>
        </div>
    );
}
