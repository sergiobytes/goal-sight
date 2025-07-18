import { Area } from '../area';
import { CompetitionData } from '../competition-data';
import { Filters } from '../filters';
import { Referee } from '../referee';
import { ResultSet, Score, Stage, Status } from '../score';
import { Season } from '../season';
import { Team } from '../team';

export interface CompetitionMatchesResponse {
  filters: Filters;
  resultSet: ResultSet;
  competition: CompetitionData;
  matches: Match[];
}

export interface Match {
  area: Area;
  competition: CompetitionData;
  season: Season;
  id: number;
  utcDate: Date;
  status: Status;
  matchday: number;
  stage: Stage;
  group: Group | null;
  lastUpdated: Date;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  referees: Referee[];
}

export enum Group {
  GroupA = 'GROUP_A',
  GroupB = 'GROUP_B',
  GroupC = 'GROUP_C',
  GroupD = 'GROUP_D',
  GroupE = 'GROUP_E',
  GroupF = 'GROUP_F',
  GroupG = 'GROUP_G',
  GroupH = 'GROUP_H',
  GroupI = 'GROUP_I',
  GroupJ = 'GROUP_J',
  GroupK = 'GROUP_K',
  GroupL = 'GROUP_L',
}
