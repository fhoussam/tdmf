import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { currentStatus } from '../models/currentStatus';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = "https://localhost:5001/coins/";

  constructor(private http: HttpClient) { }

  getJobStatus(): Observable<currentStatus> {
    return this.http.get<currentStatus>(this.baseUrl + "current-status");
  }

  sellAll() {
    this.http.post(this.baseUrl + "sell-all", null).subscribe();
  }

  resetProfile() {
    this.http.post(this.baseUrl + "reset-profile", null).subscribe(() => console.log('profile has been reset'));
  }

  makeNewOrders() {
    this.http.post(this.baseUrl + "make-new-orders", null).subscribe(() => console.log('new orders command processed'));
  }

  setCoinNames() {
    this.http.post(this.baseUrl + "set-coin-names", null).subscribe(() => console.log('coin names updated'));
  }
}
