import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currencyCards: Array<any>;

  constructor() { }

  ngOnInit() {
    this.initializeCurrencyTypes();
  }

  private initializeCurrencyTypes() {
    this.currencyCards = [
      {currencyType: 'BTC'},
      {currencyType: 'ETH'},
      {currencyType: 'LTC'}
    ];
  }

}
