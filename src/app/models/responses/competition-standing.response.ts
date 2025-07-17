import { Area } from '../area';
import { CompetitionData } from '../competition-data';
import { Filters } from '../filters';
import { Season } from '../season';
import { Standing } from '../standing';

export interface CompetitionStandingsResponse {
  filters: Filters;
  area: Area;
  competition: CompetitionData;
  season: Season;
  standings: Standing[];
}




