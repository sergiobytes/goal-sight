import { Time } from './time';
import { Winner } from './winner';

export interface Score {
  winner: Winner | null;
  duration: string;
  fullTime: Time;
  halfTime: Time;
}

export enum Stage {
  Final = 'FINAL',
  GroupStage = 'GROUP_STAGE',
  Last16 = 'LAST_16',
  QuarterFinals = 'QUARTER_FINALS',
  Round1 = 'ROUND_1',
  Round2 = 'ROUND_2',
  Round3 = 'ROUND_3',
  SemiFinals = 'SEMI_FINALS',
  RegularSeason = 'REGULAR_SEASON',
}

export enum Status {
  Finished = 'FINISHED',
  Postponed = 'POSTPONED',
  Scheduled = 'SCHEDULED',
  Timed = 'TIMED',
}

export interface ResultSet {
  count: number;
  first: Date;
  last: Date;
  played: number;
}
