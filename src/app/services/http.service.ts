import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {
    constructor(
        private http: HttpClient
    ) {}

    public get<T>(url: string): Observable<T> {
        return this.http.get(environment.apiUrl + url) as Observable<T>;
    }
}