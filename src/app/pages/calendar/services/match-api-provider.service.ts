import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/http.service';

@Injectable()
export class MatchApiProviderService {
    constructor(
        private http: HttpClientService
    ) {

    }

    getMatches() {
        this.http.get<any>('/api/match').subscribe(x => console.log(x));
    }
}