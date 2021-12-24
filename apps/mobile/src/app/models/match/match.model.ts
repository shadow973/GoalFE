export class Match {
    match_id: number;
    league_id: number;
    localteam_id: number;
    visitorteam_id: number;
    scores: Scores;
    time: Time;
    localTeam: Team;
    visitorTeam: Team;
    articles: any[];
    rate: any[];
    player_img_data: any[];
    formations: any;
    substitutions: any;
}

export class Team {
    data: MatchTeamData;
}

export class MatchTeamData {
    id: number;
    legacy_id: number;
    name: string;
    short_code: string;
    twitter: string;
    country_id: number;
    national_team: boolean;
    founded: number;
    logo_path: string;
    venue_id: number;
    current_season_id: number;
}

export class Time {
    status: string;
    starting_at: Startingat;
    minute: number;
    second?: any;
    added_time?: any;
    extra_minute?: any;
    injury_time?: any;
}

export class Startingat {
    date_time: string;
    date: string;
    time: string;
    timestamp: number;
    timezone: string;
}

export class Scores {
    localteam_score: number;
    visitorteam_score: number;
    localteam_pen_score?: any;
    visitorteam_pen_score?: any;
    ht_score: string;
    ft_score: string;
    et_score?: any;
    ps_score?: any;
}