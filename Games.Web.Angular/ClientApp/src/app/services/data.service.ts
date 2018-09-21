import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Round } from '../models/round';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>('/api/card');
    }
    postRound(round: Round) {
        this.http.post('/api/round', round);
    }
}
