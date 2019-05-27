import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { CurrencyDetailsComponent } from './main/currency/currency-details/currency-details.component';
import { CurrencyResolve } from './shared/resolve/currency.resolve';

export const ROUTES: Routes =  [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'currency-details/:cardCurrencyType',
    component: CurrencyDetailsComponent,
    resolve: {
      currency: CurrencyResolve
    }
  },
  {
    path: '**', redirectTo: 'home'
  }
]
