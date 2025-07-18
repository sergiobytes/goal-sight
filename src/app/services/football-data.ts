import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CompetitionsResponse } from '../models/responses/competitions.response';
import { CompetitionStandingsResponse } from '../models/responses/competition-standing.response';
import { CompetitionMatchesResponse } from '../models/responses/competition-matches.response';

@Injectable({
  providedIn: 'root',
})
export class FootballData {
  private http = inject(HttpClient);

  getCompetitions(): Observable<CompetitionsResponse> {
    return this.http.get<CompetitionsResponse>(`/api/competitions`);
  }

  getCompetitionById(id: number): Observable<CompetitionStandingsResponse> {
    return this.http.get<CompetitionStandingsResponse>(
      `/api/competitions/${id}/standings`
    );
  }

  getCompetitionMatchesByMatchDay(
    id: number,
    matchday: number
  ): Observable<CompetitionMatchesResponse> {
    return this.http.get<CompetitionMatchesResponse>(
      `/api/competitions/${id}/matches?matchday=${matchday}`
    );
  }

  getCompetitionMatchesByStage(
    id: number,
    stage: string
  ): Observable<CompetitionMatchesResponse> {
    return this.http.get<CompetitionMatchesResponse>(
      `/api/competitions/${id}/matches?stage=${stage}`
    );
  }
}
