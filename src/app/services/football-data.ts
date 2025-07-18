import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CompetitionsResponse } from '../models/responses/competitions.response';
import { CompetitionStandingsResponse } from '../models/responses/competition-standing.response';
import { CompetitionMatchesResponse } from '../models/responses/competition-matches.response';
import { TeamsResponse } from '../models/responses/teams.response';

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

  getAllCompetitionMatches(id: number): Observable<CompetitionMatchesResponse> {
    return this.http.get<CompetitionMatchesResponse>(
      `/api/competitions/${id}/matches`
    );
  }

  getTeams(limit: number, offset: number = 0): Observable<TeamsResponse> {
    return this.http.get<TeamsResponse>(
      `/api/teams?limit=${limit}&offset=${limit * offset}`
    );
  }
}
