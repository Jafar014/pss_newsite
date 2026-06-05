interface Player {
    id: number;
    team_id: number;
    full_name: string;
    jersey_number: number;
    position: string | null;
    matches_played: number;
    goals: number;
    assists: number;
    saved_cleansheets: number;
    age: number | null;
    country: string | null;
    photo_url: string | null;
}

interface Staff {
    id: number;
    full_name: string;
    role: string;
    photo_url: string | null;
}

interface Team {
    id: number;
    name: string;
    competition: string | null;
}

interface TeamsPlayerProps {
    team: Team;
    players: Player[];
    staff: Staff[];
}

const Position_groups: { key:string; label:string; bg:string} [] = [
    { key: 'Goalkeeper', label: 'Goalkeeper', bg: '#EFBF04' },
    { key: 'Defender', label: 'Defender', bg: '#0F7A4A' },
    { key: 'Midfielder', label: 'Midfielder', bg: '#F5F5F5' },
    { key: 'Forward', label: 'Forward', bg: '#1c1c1c' },
]

function splitName(full_name:string) : [string, string] {
    const nameParts = full_name.split(' ');

    if(nameParts.length === 1) {
return [nameParts[0], ''];
}

    const last = nameParts.pop()!;

    return [nameParts.join(' '), last];
}

export default function TeamsPlayer({ team, players, staff }: TeamsPlayerProps) {
    const headCoach = staff.find((s) => s.role === 'Pelatih Kepala');

    return (
        <>
        {/* Header */}

        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f7a4a]/75" />
            <div className="relative z-10 flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
                <h2 className="font-calcio-italiano mb-4 md:mb-6 lg:mb-8 text-4xl md:text-6xl lg:text-8xl text-white uppercase animate-typing animate-delay-400 overflow-hidden whitespace-nowrap text-center px-4">{team.name} Squad Player
                </h2>
            </div>
        </div>

        {Position_groups.map((group) => {
            const groupPlayers = players.filter(
                (p) => p.position?.toLowerCase() === group.key.toLowerCase()
            );

            if (groupPlayers.length === 0) {
return null;
}

            return (
                <div key={group.key} className="w-full relative flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-1/4 overflow-hidden bg-[#f5f5f5] border-t items-center justify-center py-8 lg:py-0">
                        <div className="relative -ml-3">
                            <span className="font-calcio-italiano italic uppercase text-4xl md:text-5xl lg:text-7xl text-[#0f7a4a]">{group.label}</span>
                        </div>
                    </div>

                    <div className="relative flex flex-row flex-wrap lg:w-3/4 bg-[#f5f5f5] right-0" >
                        {groupPlayers.map((player) => {
                            const [firstName, lastName] = splitName(player.full_name);

                            return (
                                <div key={player.id} className="group relative w-1/2 sm:w-1/3 lg:w-1/5 aspect-[3/4] cursor-pointer overflow-hidden outline outline-1 outline-[#1c1c1c]">
                                    <img
                                        src={player.photo_url || "../../half_body.jpg"}
                                        alt={`Player ${player.jersey_number}`}
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#1c1c1c] via-[#1c1c1c]/80 to-transparent opacity-100 " />
                                    <div className="absolute w-full bottom-0 p-1 lg:p-2.5">
                                        <div className="flex items-end gap-2 lg:gap-2">
                                            <p className="font-calcio-italiano text-[#Efbf04] text-6xl lg:text-7xl uppercase leading-none flex-shrink-0">
                                                {player.jersey_number}
                                            </p>
                                            <div className="flex flex-col">
                                                <p className="font-calcio-italiano text-[#f5f5f5] text-2xl lg:text-2xl uppercase leading-tight">
                                                    {firstName}
                                                </p>
                                                <p className="font-calcio-italiano text-[#f5f5f5] text-3xl lg:text-4xl uppercase leading-tight">
                                                    {lastName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        })}

            {/* Head Coach Section */}
            <div className="relative overflow-hidden h-[10vh] md:h-[12vh] lg:h-[15vh]">
                <div className="absolute inset-0 bg-[#1c1c1c]/90" />
                <div className="relative z-10 flex flex-col items-center justify-center pt-1">
                    <h2 className="font-calcio-italiano mb-4 md:mb-6 lg:mb-8 text-4xl md:text-6xl lg:text-8xl font-bold text-[#f5f5f5] uppercase text-center">Head Coach</h2>  
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row h-[30vh] lg:h-[45vh] px-6 md:px-12 lg:px-24 relative">
                <div className="flex flex-col w-full lg:w-1/2 h-full overflow-hidden justify-center items-center">
                    <p className="text-[#0f7a4a] font-calcio-italiano text-3xl md:text-4xl lg:text-6xl">{headCoach?.full_name || 'Ansyari '}</p>
                    <p className="text-[#0f7a4a] font-calcio-italiano text-xl md:text-2xl lg:text-4xl">Indonesia</p>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 h-full overflow-hidden justify-center items-center lg:absolute lg:right-16">
                    <img
                        src={headCoach?.photo_url || "../../half_body.jpg"}
                        alt="Head Coach"
                        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                    />
                </div>
            </div>
            {/* <div className="mx-auto max-w-7xl px-4 py-8"> <pre className="rounded bg-gray-900 p-4 text-sm text-green-400 overflow-auto"> {JSON.stringify({ team, players, staff }, null, 2)} </pre> </div> */}
        </>
    );
}
