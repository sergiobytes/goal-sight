import { Filters } from '../filters';
import { TeamData } from '../team-data';

export interface TeamsResponse {
  count: number;
  filters: Filters;
  teams: TeamData[];
}
