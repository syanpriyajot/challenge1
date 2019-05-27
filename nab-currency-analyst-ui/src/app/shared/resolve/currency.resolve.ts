import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CurrencyService} from "../../services/currency.service";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class CurrencyResolve implements Resolve<any> {

    constructor(public currencyService: CurrencyService){}
  
    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.currencyService.getCurrencyDetailsByType(route.paramMap.get('cardCurrencyType')).pipe(
          map((result) => result),
          catchError((err) => Observable.throw(err.json().error))
        );
    }

}
