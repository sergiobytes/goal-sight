import { Filters } from '../filters';
import { Team } from '../team';

export interface TeamsResponse {
  count: number;
  filters: Filters;
  teams: Team[];
}
