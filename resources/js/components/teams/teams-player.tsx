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

interface Team {
    id: number;
    name: string;
    competition: string | null;
}

interface TeamsPlayerProps {
    team: Team;
    players: Player[];
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

export default function TeamsPlayer({ team, players }: TeamsPlayerProps) {

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

        <div className="pb-12 md:pb-16 lg:pb-20">
            {Position_groups.map((group) => {
            const groupPlayers = players.filter(
                (p) => p.position?.toLowerCase() === group.key.toLowerCase()
            );

            if (groupPlayers.length === 0) {
return null;
}

            return (
                <div key={group.key} className="w-full relative flex flex-col bg-[#f5f5f5] px-6 sm:px-8 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10">
                    <span className="font-calcio-italiano uppercase text-3xl md:text-4xl lg:text-5xl text-[#0f7a4a] tracking-wider">
                        {group.label}
                    </span>

                    <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-4 lg:mt-6 justify-items-center justify-center">
                        {groupPlayers.map((player) => {
                            return (
                                <div key={player.id} className="w-full flex flex-col overflow-hidden rounded-lg bg-white border border-[#1c1c1c]/20 shadow-md">
                                    <img
                                        src={player.photo_url || "../../half_body.jpg"}
                                        alt={player.full_name}
                                        loading="lazy"
                                        className="aspect-[3/4] w-full object-cover object-top"
                                    />
                                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0f7a4a]">
                                        <p className="font-calcio-italiano text-[#f5f5f5] text-2xl sm:text-3xl">
                                            {player.jersey_number}
                                        </p>
                                        <p className="font-calcio-italiano text-[#f5f5f5] text-xl sm:text-2xl uppercase truncate">
                                            {player.full_name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        })}
        </div>

        </>
    );
}
