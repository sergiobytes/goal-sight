import { TeamData } from './team-data';

export interface Table {
  position: number;
  team: TeamData;
  playedGames: number;
  form: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
