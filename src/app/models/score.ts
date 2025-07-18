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
  ThirdPlace = 'THIRD_PLACE',
  SemiFinals = 'SEMI_FINALS',
  QuarterFinals = 'QUARTER_FINALS',
  Last16 = 'LAST_16',
  Last32 = 'LAST_32',
  Last64 = 'LAST_64',
  Round4 = 'ROUND_4',
  Round3 = 'ROUND_3',
  Round2 = 'ROUND_2',
  Round1 = 'ROUND_1',
  GroupStage = 'GROUP_STAGE',
  PreliminaryRound = 'PRELIMINARY_ROUND',
  Qualification = 'QUALIFICATION',
  QualificationRound1 = 'QUALIFICATION_ROUND_1',
  QualificationRound2 = 'QUALIFICATION_ROUND_2',
  QualificationRound3 = 'QUALIFICATION_ROUND_3',
  PlayoffRound1 = 'PLAYOFF_ROUND_1',
  PlayoffRound2 = 'PLAYOFF_ROUND_2',
  Playoffs = 'PLAYOFFS',
  RegularSeason = 'REGULAR_SEASON',
  Clausura = 'CLAUSURA',
  Apertura = 'APERTURA',
  Championship = 'CHAMPIONSHIP',
  Relegation = 'RELEGATION',
  RelegationRound = 'RELEGATION_ROUND',
}

export enum Status {
  Finished = 'FINISHED',
  Postponed = 'POSTPONED',
  Scheduled = 'SCHEDULED',
  Timed = 'TIMED',
  Live = 'LIVE',
  InPlay = 'IN_PLAY',
  Paused = 'PAUSED',
  Suspended = 'SUSPENDED',
  Cancelled = 'CANCELLED',
}

export interface ResultSet {
  count: number;
  first: Date;
  last: Date;
  played: number;
}
