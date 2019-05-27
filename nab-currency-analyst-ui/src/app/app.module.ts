import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './main/currency/currency-card/currency-card.component';
import { CurrencyDetailsComponent } from './main/currency/currency-details/currency-details.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';
import { CurrencyResolve } from './shared/resolve/currency.resolve';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCardComponent,
    CurrencyDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    FormsModule
  ],
  providers: [CurrencyService, CurrencyResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
