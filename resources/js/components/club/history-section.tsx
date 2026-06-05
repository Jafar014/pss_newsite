export default function HistorySection() {
    const timelineData = [
        {
            title: "Lahirnya PSS",
            date: "20-Mei-1976",
            description:"lorem ipsum dolor sit amet."
        },
        {
            title: "Topik 2",
            date: "20-Mei-1986",
            description:"lorem ipsum dolor sit amet."
        },
        {
            title: "Topik 3",
            date: "20-Mei-2001",
            description:"lorem ipsum dolor sit amet."
        },
        {
            title: "topik 4",
            date: "20-Mei-1976",
            description:"lorem ipsum dolor sit amet."
        },
    ]

    return (
        <section className="relative h-full">
        
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]/75" />
                <div className="relative z-10 flex flex-col items-center justify-center py-12 md:py-16">
                    <h2 className="font-calcio-italiano mb-6 md:mb-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Sejarah Klub
                    </h2>
                </div>
            </div>

           <div className="max-w-full mt-6 md:mt-8 mx-4 mb-8 md:mb-12">
                {/* Sejarah 1 - Desktop */}
                <div className="hidden lg:grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -mr-12 ml-8 mt-16">
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            <div className="justify-end flex">
                                <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Lahirnya PSS Sleman </h1>
                            </div>
                            <div className="justify-end flex">
                                <p className="text-[#0f7a4a] text-md px-2 font-bold">20 Mei 1976</p>
                            </div>
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="text-[#f5f5f5] absolute left-22.5 font-calcio-italiano text-xl py-2 bg-[#0f7a4a] rounded-lg px-2">Timeline Sejarah</span>
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2 top-11"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)]">
                            <span className="m-5 font-calcio-italiano text-xl">1976</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-10"/>
                </div>

                {/* Timeline entries untuk lg ke bawah */}
                <div className="lg:hidden">
                    {/* Entry 1 */}
                    <div className="flex gap-3 sm:gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            {/* timeline tahun sejarah */}
                            <span className="bg-[#0f7a4a] text-white text-xs sm:text-sm font-calcio-italiano px-2 sm:px-3 py-0.5 rounded-md whitespace-nowrap">1976</span>
                            <div className="flex-1 w-0.5 bg-[#0f7a4a]/30 mt-1" />
                        </div>
                        <div className="relative flex-1 mt-1">
                            <div className="border-2 border-[#1c1c1c]/30 rounded-xl">
                                {/* Gambar */}
                                <div className="rounded-t-xl p-2 w-full h-40 sm:h-52 md:h-64 bg-gray-400">
                                    <span className="flex items-center justify-center h-full text-sm">*Gambar disini</span>
                                </div>

                                <div className="rounded-b-xl p-3 sm:p-4 md:p-5">
                                    {/* Title sejarah */}
                                    <h1 className="text-[#0f7a4a] text-lg sm:text-xl md:text-2xl font-calcio-italiano">Lahirnya PSS Sleman</h1>
                                    {/* Waktu sejara */}
                                    <p className="text-[#0f7a4a] text-xs sm:text-sm font-bold mb-2">20 Mei 1976</p>
                                    <p className="text-[#1c1c1c] text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 2 */}
                    <div className="flex gap-3 sm:gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            {/* timeline tahun waktu */}
                            <span className="bg-[#0f7a4a] text-white text-xs sm:text-sm font-calcio-italiano px-2 sm:px-3 py-0.5 rounded-md whitespace-nowrap">1996</span>
                            <div className="flex-1 w-0.5 bg-[#0f7a4a]/30 mt-1" />
                        </div>
                        <div className="relative flex-1 mt-1">
                            <div className="border-2 border-[#1c1c1c]/30 rounded-xl">
                            {/* Gambar sejarah */}
                                <div className="rounded-t-xl p-2 w-full h-40 sm:h-52 md:h-64 bg-gray-400">
                                    <span className="flex items-center justify-center h-full text-sm">*Gambar disini</span>
                                </div>
                                <div className="rounded-b-xl p-3 sm:p-4 md:p-5">
                                    {/* Judul sejarah */}
                                    <h1 className="text-[#0f7a4a] text-lg sm:text-xl md:text-2xl font-calcio-italiano">Judul Disini</h1>
                                    {/* Waktu sejarah */}
                                    <p className="text-[#0f7a4a] text-xs sm:text-sm font-bold mb-2">Tanggal sejarah</p>
                                    {/* Deskripsi sejarah */}
                                    <p className="text-[#1c1c1c] text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 3 */}
                    <div className="flex gap-3 sm:gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            <span className="bg-[#0f7a4a] text-white text-xs sm:text-sm font-calcio-italiano px-2 sm:px-3 py-0.5 rounded-md whitespace-nowrap">2006</span>
                            <div className="flex-1 w-0.5 bg-[#0f7a4a]/30 mt-1" />
                        </div>
                        <div className="relative flex-1 mt-1">
                            <div className="border-2 border-[#1c1c1c]/30 rounded-xl">
                            {/* Gambar sejarah */}
                                <div className="rounded-t-xl p-2 w-full h-40 sm:h-52 md:h-64 bg-gray-400">
                                    <span className="flex items-center justify-center h-full text-sm">*Gambar disini</span>
                                </div>
                                <div className="rounded-b-xl p-3 sm:p-4 md:p-5">
                                    {/* Judul sejarah */}
                                    <h1 className="text-[#0f7a4a] text-lg sm:text-xl md:text-2xl font-calcio-italiano">Judul Disini</h1>
                                    {/* Waktu sejarah */}
                                    <p className="text-[#0f7a4a] text-xs sm:text-sm font-bold mb-2">Tanggal sejarah</p>
                                    {/* Deskripsi sejarah */}
                                    <p className="text-[#1c1c1c] text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Entry 4 */}
                    <div className="flex gap-3 sm:gap-4 mb-4">
                        <div className="flex flex-col items-center">
                            <span className="bg-[#0f7a4a] text-white text-xs sm:text-sm font-calcio-italiano px-2 sm:px-3 py-0.5 rounded-md whitespace-nowrap">2018</span>
                            <div className="flex-1 w-0.5 bg-[#0f7a4a]/30 mt-1" />
                        </div>
                        <div className="relative flex-1 mt-1">
                            <div className="border-2 border-[#1c1c1c]/30 rounded-xl">
                            {/* Gambar sejarah */}
                                <div className="rounded-t-xl p-2 w-full h-40 sm:h-52 md:h-64 bg-gray-400">
                                    <span className="flex items-center justify-center h-full text-sm">*Gambar disini</span>
                                </div>
                                <div className="rounded-b-xl p-3 sm:p-4 md:p-5">
                                    {/* Judul sejarah */}
                                    <h1 className="text-[#0f7a4a] text-lg sm:text-xl md:text-2xl font-calcio-italiano">Judul Disini</h1>
                                    {/* Waktu sejarah */}
                                    <p className="text-[#0f7a4a] text-xs sm:text-sm font-bold mb-2">Tanggal sejarah</p>
                                    {/* Deskripsi sejarah */}
                                    <p className="text-[#1c1c1c] text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sejarah 2 - Desktop */}
                <div className="hidden lg:grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-10"/>
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                            <span className="m-4 font-calcio-italiano text-xl">1996</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -ml-12 mr-8 mt-8">
                        {/* Gambar sejarah */}
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            {/* judul sejarah */}
                            <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul Disini</h1>
                            {/* waktu sejarah */}
                            <span className="text-[#0f7a4a] text-md px-2 font-bold font-stretch-50%">Tanggal sejarah</span>
                            {/* deskripsi sejarah */}
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                </div>

                {/* Sejarah 3 - Desktop */}
                <div className="hidden lg:grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -mr-12 ml-8 mt-4">
                        {/* Gambar sejarah */}
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            {/* Title sejarah */}
                            <div className="justify-end flex">
                                <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul disini</h1>
                            </div>
                            {/* Tanggal sejarah */}
                            <div className="justify-end flex">
                                <p className="text-[#0f7a4a] text-md px-2 font-bold">Tanggal</p>
                            </div>
                            {/* Deskripsi sejarah */}
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)]">
                            <span className="m-5 font-calcio-italiano text-xl">2006</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-10"/>
                </div>

                {/* Sejarah 4 - Desktop */}
                <div className="hidden lg:grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-10"/>
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2 mb-4"/>
                        <div className="absolute inset-0 rounded-lg bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                            <span className="m-4 font-calcio-italiano text-xl">2018</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -ml-12 mr-8 -mt-4 mb-8">
                        {/* Gambar sejarah */}
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            {/* Judul sejarah */}
                            <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul Disini</h1>
                            {/* Tanggal sejarah */}
                            <span className="text-[#0f7a4a] text-md px-2 font-bold">Tanggal</span>
                            {/* Deskripsi sejarah */}
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    );
}