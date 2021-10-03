import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';
import { IMatchResponse } from 'src/app/interfaces/match-interface';

@Injectable()
export class MatchApiProviderService {
    constructor(
        private http: HttpClientService
    ) {

    }

    getMatches(): Observable<IMatchResponse[]> {
        return this.http.get<IMatchResponse[]>('/api/match');
    }
}