import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    private apiUrl = 'http://localhost:5049/api/calculator';

    constructor(private http: HttpClient){}

    add(start: number, amount: number){
        return this.http.get<number>(
            `${this.apiUrl}/add?start=${start}&amount=${amount}`
        );
    }

    subtract(start: number, amount: number){
        return this.http.get<number>(
            `${this.apiUrl}/subtract?start=${start}&amount=${amount}`
        );
    }
}