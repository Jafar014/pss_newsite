import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface Player {
    id: number;
    firstName: string;
    lastName: string;
    number: string;
    position: string;
    image: string;
}

interface HomePlayersProps {
    players?: Player[];
}

export default function HomePlayers({ players = [] }: HomePlayersProps) {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

    if (!players || players.length === 0) {
        return null;
    }

    const randomPlayers = [...players].slice(0, 5);

    return (
        <section className="w-full bg-[#f5f5f5] [content-visibility:auto] [contain-intrinsic-size:auto_600px]">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0f7a4a]" />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <h2 className="font-calcio-italiano text-4xl text-center md:text-6xl lg:text-7xl tracking-wider text-[#f5f5f5] uppercase">
                        Skuat Utama
                    </h2>
                </div>
            </div>

            <div className="max-w-full px-4 pb-8 mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                    {randomPlayers.map((player) => (
                        <div
                            key={player.id}
                            className="group relative cursor-pointer"
                            onClick={() =>
                                setSelectedPlayer(
                                    selectedPlayer?.id === player.id ? null : player,
                                )
                            }
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <div className="absolute top-2 left-2 z-10">
                                    <span className="font-calcio-italiano text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-[#0f7a5a]">
                                        {player.number}
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-end justify-center">
                                    <img
                                        src={player.image}
                                        alt={`${player.firstName} ${player.lastName}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute right-0 bottom-0 left-0 p-3 text-left">
                                    <div className="translate-y-0 transform transition-transform duration-300">
                                        <p className="font-calcio-italiano text-sm sm:text-lg md:text-xl tracking-wider text-white uppercase">
                                            {player.firstName}
                                        </p>
                                        <p className="font-calcio-italiano text-lg sm:text-2xl md:text-3xl leading-tight text-white uppercase">
                                            {player.lastName}
                                        </p>
                                        <p className="text-sm sm:text-lg md:text-xl font-calcio-italiano text-[#EFBF04] font-bold uppercase tracking-wider">
                                            {player.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center pb-12 md:pb-16">
                <Link
                    href="/skuad"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#0f7a4a] text-white font-calcio-italiano text-lg md:text-xl uppercase tracking-wider rounded-full hover:bg-white hover:text-[#0f7a4a] border border-transparent hover:border-[#0f7a4a] transition-all duration-300"
                >
                    Lihat Lainnya
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
