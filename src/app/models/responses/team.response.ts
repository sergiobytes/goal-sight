import { Area } from '../area';
import { Coach } from '../coach';
import { CompetitionData } from '../competition-data';
import { Squad } from '../squad';

export interface TeamResponse {
  area: Area;
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
  runningCompetitions: CompetitionData[];
  coach: Coach;
  squad: Squad[];
  staff: any[];
  lastUpdated: Date;
}
