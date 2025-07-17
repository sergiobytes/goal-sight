import { Winner } from './winner';

export interface Season {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: Winner | null;
}
