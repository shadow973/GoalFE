export class MatchStatistics {
    local_team: MatchStatisticsTeam;
    visitor_team: MatchStatisticsTeam;
}

export class MatchStatisticsTeam {
    team_id: number;
    fixture_id: number;
    shots: Shots;
    passes: Passes;
    attacks: Attacks;
    fouls: number;
    corners: number;
    offsides: number;
    possessiontime: number;
    yellowcards: number;
    redcards: number;
    yellowredcards: number;
    saves: number;
    substitutions: number;
    goal_kick?: any;
    goal_attempts: number;
    free_kick?: any;
    throw_in?: any;
    ball_safe: number;
    goals: number;
    penalties: number;
    injuries: number;
    tackles: number;
}

export class Attacks {
    attacks: number;
    dangerous_attacks: number;
}

export class Passes {
    total: number;
    accurate: number;
    percentage: number;
}

export class Shots {
    total: number;
    ongoal: number;
    blocked: number;
    offgoal: number;
    insidebox: number;
    outsidebox: number;
}