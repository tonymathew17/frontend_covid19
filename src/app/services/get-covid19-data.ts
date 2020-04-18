import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Covid19Service {
    constructor(private http: HttpClient) { }
    GET_COUNTRIES: string = 'http://localhost:3000/getAffectedCountries';

    getCountries() {
        return this.http.get(this.GET_COUNTRIES);
    }
}