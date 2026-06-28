interface HistoryItem {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string | null;
}

const timeline: HistoryItem[] = [
    {
        id: 1,
        title: "Lahirnya PSS",
        date: "1976-05-20",
        description: "PSS Sleman lahir pada 20 Mei 1976 sebagai jawaban atas keinginan masyarakat Sleman untuk memiliki perserikatan sepak bola, setelah terpenuhi syarat minimal lima klub. Saat itu sudah ada PS Mlati, AMS Seyegan, PSK Kalasan, Godean Putra, dan PSKS Sleman, lalu PSS dibentuk dengan Ketua Umum Gafar Anwar. Setelah itu, kepemimpinan berlanjut ke Drs. Suyadi, Drs. R. Subardi Pd, Letkol Infanteri Suhartono, H. RM. Tirun Marwito, S.H., hingga para bupati seperti Drs. H. Arifin Ilyas dan Drs. H. Ibnu Subiyanto, Akt.",
        image: "https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=800&auto=format&fit=crop&fm=webp",
    },
    {
        id: 2,
        title: "Awal Kiprah PSS Sleman",
        date: "1976-01-01",
        description: "PSS Sleman memulai debut resminya pada turnamen seleksi Pra PON DIY tahun 1976 di Stadion Kridosono, Yogyakarta. Sejak pertengahan tahun 1980-an, PSS secara konsisten membangun kultur sepak bola yang kuat melalui kompetisi internal rutin yang bahkan sempat dipuji ketua PSSI sebagai yang terbaik di Indonesia. Meski berstatus tim perserikatan muda dan minim sponsor besar, klub ini mandiri dengan mengandalkan motivasi tinggi serta kontribusi pribadi dari masyarakat Sleman yang gila bola. Perjuangan panjang PSS di Divisi II sejak tahun 1979 sering kali kandas di zona regional akibat persaingan ketat dengan tim-tim asal Jawa Tengah. PSS akhirnya berhasil promosi ke Divisi Satu Liga Indonesia setelah melewati babak play-off yang dramatis di Stadion Tridadi pada Juli 1996 di bawah asuhan pelatih Suwarno.",
        image: "https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=800&auto=format&fit=crop&fm=webp",
    },
    {
        id: 3,
        title: "Divisi Satu Liga Indonesia",
        date: "1996-11-17",
        description: "Debut PSS Sleman di Divisi Satu Liga Indonesia 1996/1997 cukup mengejutkan setelah berhasil lolos ke babak sepuluh besar bersama Persikabo Bogor. Sayangnya, langkah mereka menuju babak semifinal terhenti karena hanya mampu finis di peringkat ketiga Grup A di Stadion Mandala Krida. Pada musim 1999/2000, Bupati Drs. H. Arifin Ilyas memiliki motivasi kuat untuk mengantarkan PSS ke kasta tertinggi di akhir masa jabatannya. Di tengah situasi krisis moneter, PSS akhirnya sukses mengunci tiket promosi ke Divisi Utama Liga Indonesia setelah finis sebagai Juara II dalam babak empat besar di Tangerang. Keberhasilan pada Mei 2000 tersebut juga diwarnai aksi gemilang penyerang M. Eksan yang keluar sebagai pencetak gol terbanyak kompetisi dengan torehan 11 gol.",
        image: "https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=800&auto=format&fit=crop&fm=webp",
    },
    {
        id: 4,
        title: "Divisi Utama Liga Indonesia",
        date: "2001-01-14",
        description: "Perjalanan PSS Sleman menuju Divisi Utama Liga Indonesia diraih lewat proses panjang yang matang dan bukan karena hasil karbitan. Meski sempat dipandang sebelah mata, PSS membuktikan diri mampu bersaing di kasta tertinggi dengan tetap mengandalkan para pemain lokal andalan seperti M. Eksan dan Slamet Riyadi. Pada penampilan perdananya, PSS langsung membuat kejutan besar dengan membalikkan keadaan dan menundukkan tim elit bertabur bintang, Pelita Solo, dengan skor 2-1. Kemenangan tak terduga atas Pelita Solo ini bahkan sempat membuat Gubernur DIY, Sri Sultan Hamengkubuwana X, merasa kaget sekaligus heran dengan kemampuan anak-anak Sleman. Berbekal semangat tinggi dan mental pantang menyerah, PSS kemudian sukses mengalahkan Gelora Dewata hingga sempat bertengger di puncak klasemen sementara.",
        image: "https://images.unsplash.com/photo-1769859177914-f66488d71193?q=80&w=800&auto=format&fit=crop&fm=webp",
    },
];

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function HistorySection() {
    return (
        <section className="w-full pb-12 md:pb-20">
            {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={item.id}
                        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                        <div className="relative w-full overflow-hidden lg:w-1/2">
                            <img
                                src={item.image ?? ""}
                                alt={item.title}
                                className="h-64 w-full object-cover lg:h-[50vh]"
                            />
                            <div className={`hidden lg:absolute lg:inset-0 ${isEven ? "lg:bg-gradient-to-r" : "lg:bg-gradient-to-l"} from-[#1c1c1c]/40 to-transparent`} />
                        </div>
                        <div className="flex w-full items-center bg-[#f5f5f5] lg:w-1/2">
                            <div className="px-6 py-8 lg:px-12 lg:py-0">
                                <span className="text-sm font-semibold tracking-widest text-[#0f7a4a] uppercase">
                                    {formatDate(item.date)}
                                </span>
                                <h3 className="mt-3 text-2xl font-bold text-[#1c1c1c] lg:text-4xl">
                                    {item.title}
                                </h3>
                                <div className="mt-4 h-0.5 w-16 bg-[#0f7a4a]" />
                                <p className="mt-6 text-base leading-relaxed text-[#1c1c1c] lg:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}