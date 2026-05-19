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
                <div className="relative z-10 flex flex-col items-center justify-center py-16">
                    <h2 className="font-calcio-italiano mb-8 text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center">Sejarah Klub
                    </h2>
                </div>
            </div>

           <div className="max-w-full mt-8 mx-4 mb-12 ">
                {/* Sejarah 1 */}
                <div className="grid grid-cols-5 w-full">
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
                    {/* Tahun Sejarah */}
                    <div className="relative h-full">
                        <span className="text-[#f5f5f5] absolute left-22.5 font-calcio-italiano text-xl py-2 bg-[#0f7a4a] rounded-lg px-2">Timeline Sejarah</span>
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2 top-11"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)]">
                            <span className="m-5 font-calcio-italiano text-xl">1976</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-10"/>
                </div>

                {/* Sejarah 2 */}
                <div className="grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-10"/>
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                            <span className="m-4 font-calcio-italiano text-xl">1996</span>
                        </div>
                    </div>
                    {/* Isi Konten */}
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -ml-12 mr-8 mt-8">
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul Disini</h1>
                            <span className="text-[#0f7a4a] text-md px-2 font-bold font-stretch-50%">Tanggal sejarah</span>
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                </div>
                {/* Sejarah 3 */}
                <div className="grid grid-cols-5 w-full">
                    {/* Isi Konten */}
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -mr-12 ml-8 mt-4">
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            <div className="justify-end flex">
                                <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul disini</h1>
                            </div>
                            <div className="justify-end flex">
                                <p className="text-[#0f7a4a] text-md px-2 font-bold">Tanggal</p>
                            </div>
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                    {/* Tahun Sejarah */}
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2"/>
                        <div className="absolute rounded-lg inset-0 bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)]">
                            <span className="m-5 font-calcio-italiano text-xl">2006</span>
                        </div>
                    </div>
                    <div className="relative col-span-2 h-10"/>
                </div>
                {/* Sejarah 4 */}
                <div className="grid grid-cols-5 w-full">
                    <div className="relative col-span-2 h-10"/>
                    {/* Tahun sejarah */}
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-[#1c1c1c]/25 w-2 left-1/2 mb-4"/>
                        <div className="absolute inset-0 rounded-lg bg-[#0f7a4a] w-16 h-8 left-30 top-1/2 [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
                            <span className="m-4 font-calcio-italiano text-xl">2018</span>
                        </div>
                    </div>
                    {/* Isi konten */}
                    <div className="relative col-span-2 h-full border-2 border-[#1c1c1c]/30 rounded-xl -ml-12 mr-8 -mt-4 mb-8">
                        <div className="relative rounded-t-xl p-2 w-full h-75 bg-gray-400 mb-4">
                            <span className="justify-center items-center">*Gambar disini</span>
                        </div>
                        <div className="relative rounded-b-xl p-2 w-full h-auto">
                            <h1 className="text-[#0f7a4a] p-2 text-2xl font-bold font-calcio-italiano">Judul Disini</h1>
                            <span className="text-[#0f7a4a] text-md px-2 font-bold">Tanggal</span>
                            <p className="text-[#1c1c1c] p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur nesciunt asperiores! Recusandae ducimus possimus dolore obcaecati assumenda tempora aliquam quae praesentium nulla alias. Deserunt ad error molestias reiciendis amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi voluptatem eligendi voluptates adipisci, natus earum numquam alias, necessitatibus distinctio ratione nesciunt minima ad officiis omnis amet consectetur. Aliquam, sit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam eius iste veritatis, laboriosam doloribus nesciunt amet consequatur beatae qui asperiores distinctio dolores deleniti impedit, labore id perspiciatis harum assumenda.</p>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    );
}