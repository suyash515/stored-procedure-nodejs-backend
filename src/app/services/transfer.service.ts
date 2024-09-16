import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TransferRequest {
  sourceAccountId: number;
  targetAccountId: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  constructor(private http: HttpClient) {}

  transferFunds(request: TransferRequest): Observable<any> {
    return this.http.post('/api/transfer', request);
  }
}