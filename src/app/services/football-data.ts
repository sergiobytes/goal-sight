import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CompetitionData,
  CompetitionsResponse,
} from '../models/competitions.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballData {
  private http = inject(HttpClient);

  getCompetitions(): Observable<CompetitionsResponse> {
    return this.http.get<CompetitionsResponse>(`/api/competitions`);
  }

  getCompetitionById(id: number): Observable<CompetitionData> {
    return this.http.get<CompetitionData>(`/api/competitions/${id}`);
  }
}
