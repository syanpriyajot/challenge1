import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import URL_CONFIG from '../url.config';
import { Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';

const headers = new HttpHeaders()
  .append('Access-Control-Allow-Origin', '*')
  .append('content-type', 'application/json');


@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  getCurrencyDetailsByType(currencyType: string): Observable<Currency> {
    return this.http.get<Currency>( URL_CONFIG.CURRENCY_TYPE_PREFIX + currencyType, {headers});
  }

}
