import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getBeverages(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/beverage`).toPromise();
        const beverage = resp.json();
        return beverage || [];
    }
    
    async getBeverageById(beverageID): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/beverage/id/${beverageID}`).toPromise();
        const beverage = resp.json();
        return beverage || [];
    }
    
    async addBeverage(beverage): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/beverage`, beverage).toPromise();
        const newbeverage = resp.json();
        return newbeverage || null;
    }
    
    async deleteBeverage(beverageID): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/beverage/id/${beverageID}`).toPromise();
        const status = resp.json();
        return status;
    }
    
    async updateBeverage(beverageID, beverage): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/beverage/id/${beverageID}`, beverage).toPromise();
        const updatedbeverage = resp.json();
        return updatedbeverage;
    }
}
