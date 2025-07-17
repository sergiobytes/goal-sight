import { Area } from "./area";
import { Season } from "./season";

export interface CompetitionData {
  id: number;
  area?: Area;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan?: string;
  currentSeason?: Season;
  seasons?: Season[]
  numberOfAvailableSeasons?: number;
  lastUpdated?: Date;
}