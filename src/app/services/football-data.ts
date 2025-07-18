import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitionData } from '../models/competition-data';
import { CompetitionsResponse } from '../models/responses/competitions.response';
import { CompetitionStandingsResponse } from '../models/responses/competition-standing.response';

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

  
}
