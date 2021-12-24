export class MatchPlayers {
    lineup: MatchPlayer[];
    bench: MatchPlayer[];
}

export class MatchPlayer {
    team_id: number;
    fixture_id: number;
    player_id: number;
    player_name: string;
    number: number;
    position: string;
    additional_position?: any;
    formation_position: number;
    posx: number;
    posy: number;
    captain: boolean;
    type: string;
    stats: any;
}