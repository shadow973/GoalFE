export class MatchHighlights {
    substitutions: MatchSubstitution[];
    cards: MatchCard[];
    goals: MatchGoal[];
}

export class MatchSubstitution {
    team_id: number;
    minute: number;
    player_in_name: string;
    player_out_name: string;
    player_in_id: number;
    player_out_id: number;
    view_type?: string;
    view_position?: string;
}

export class MatchCard {
    team_id: number;
    type: string;
    minute: number;
    player_name: string;
    player_id: number;
    view_type?: string;
    view_position?: string;
}

export class MatchGoal {
    team_id: number;
    minute: number;
    player_assist_name: string;
    player_name: string;
    result: any;
    type: string;
    player_id: number;
    view_type?: string;
    view_position?: string;
}