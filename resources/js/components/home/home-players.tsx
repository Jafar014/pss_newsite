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

export default function HomePlayers({
    players = [
        {
            id: 1,
            firstName: 'Muhammad',
            lastName: 'Rifqi',
            number: '1',
            position: 'Goalkeeper',
            image: '../../half_body.jpg',
        },
        {
            id: 9,
            firstName: 'Muhammad',
            lastName: 'Rifqi',
            number: '15',
            position: 'Goalkeeper',
            image: '../../half_body.jpg',
        },
        {
            id: 2,
            firstName: 'Alan',
            lastName: 'Alexandre',
            number: '2',
            position: 'Defender',
            image: '../../half_body.jpg',
        },
        {
            id: 3,
            firstName: 'Ricky',
            lastName: 'Pratama',
            number: '4',
            position: 'Defender',
            image: '../../half_body.jpg',
        },
        {
            id: 10,
            firstName: 'Alan',
            lastName: 'Alexandre',
            number: '21',
            position: 'Defender',
            image: '../../half_body.jpg',
        },
        {
            id: 11,
            firstName: 'Ricky',
            lastName: 'Pratama',
            number: '14',
            position: 'Defender',
            image: '../../half_body.jpg',
        },
        {
            id: 4,
            firstName: 'Dimas',
            lastName: 'Samudra',
            number: '6',
            position: 'Midfielder',
            image: '../../half_body.jpg',
        },
        {
            id: 5,
            firstName: 'Febriansyah',
            lastName: '',
            number: '8',
            position: 'Midfielder',
            image: '../../half_body.jpg',
        },
        {
            id: 12,
            firstName: 'Dimas',
            lastName: 'Samudra',
            number: '16',
            position: 'Midfielder',
            image: '../../half_body.jpg',
        },
        {
            id: 13,
            firstName: 'Febriansyah',
            lastName: '',
            number: '18',
            position: 'Midfielder',
            image: '../../half_body.jpg',
        },
        {
            id: 6,
            firstName: 'Sahal',
            lastName: 'Abud',
            number: '10',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
        {
            id: 7,
            firstName: 'Rezki',
            lastName: 'Alberto',
            number: '11',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
        {
            id: 8,
            firstName: 'Rendi',
            lastName: 'Irham',
            number: '9',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
        {
            id: 14,
            firstName: 'Sahal',
            lastName: 'Abud',
            number: '30',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
        {
            id: 15,
            firstName: 'Rezki',
            lastName: 'Alberto',
            number: '31',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
        {
            id: 16,
            firstName: 'Rendi',
            lastName: 'Irham',
            number: '19',
            position: 'Forward',
            image: '../../half_body.jpg',
        },
    ],
}: HomePlayersProps) {
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

    const getRandomPlayers = () => {
        const shuffled = [...players].sort(() => Math.random() - 0.5);

        return shuffled.slice(0, 4);
    };

    const randomPlayers = getRandomPlayers();

    return (
        <section className="w-full bg-[#1c1c1c] ">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
                    <h2 className="font-calcio-italiano text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#0f7a4a] uppercase">
                        Skuat Utama
                    </h2>
                    <div className="h-1 w-24 bg-[#EFBF04]" />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-16 mt-8">
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
                                    <span className="font-calcio-italiano text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f7a5a]">
                                        {player.number}
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-end justify-center">
                                    <img
                                        src={player.image}
                                        alt={`${player.firstName} ${player.lastName}`}
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
        </section>
    );
}
