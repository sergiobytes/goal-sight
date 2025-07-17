export interface CompetitionsResponse {
  count: number;
  filters: Filters;
  competitions: CompetitionData[];
}

export interface CompetitionData {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: Type;
  emblem: string;
  plan: Plan;
  currentSeason: Season;
  seasons?: Season[]
  numberOfAvailableSeasons?: number;
  lastUpdated: Date;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: null | string;
}

export interface Season {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: Winner | null;
}

export interface Winner {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
}

export enum Plan {
  TierFour = 'TIER_FOUR',
  TierOne = 'TIER_ONE',
}

export enum Type {
  Cup = 'CUP',
  League = 'LEAGUE',
}

export interface Filters {
  client: string;
}
