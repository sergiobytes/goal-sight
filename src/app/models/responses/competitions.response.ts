import { CompetitionData } from '../competition-data';
import { Filters } from '../filters';

export interface CompetitionsResponse {
  count: number;
  filters: Filters;
  competitions: CompetitionData[];
}
