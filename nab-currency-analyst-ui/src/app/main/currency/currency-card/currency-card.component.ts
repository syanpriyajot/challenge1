import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CURRENCY_ANALYST_CONFIG from '../../../currency-analyst.config';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currencyType: Array<any>;
  private cardCurrencyType: string;
  private currencyIconImageLocation: string;
  private currencyAnalystConfig = CURRENCY_ANALYST_CONFIG;


  constructor(
    private router: Router) { }


  ngOnInit() {
    this.cardCurrencyType = this.currencyType['currencyType'];
    console.log(this.cardCurrencyType);
  }

  getCardDetails(): void {
    console.log(this.cardCurrencyType);
    this.router.navigate(['currency-details', this.cardCurrencyType]);
  }

  get currencyIconImage() {
    if (this.cardCurrencyType === 'BTC') {
      this.currencyIconImageLocation = '../../assets/svg/Bitcoin-icon.svg';
    } else if (this.cardCurrencyType === 'ETH') {
      this.currencyIconImageLocation = '../../assets/svg/Ethereum-icon.svg';
    } else if (this.cardCurrencyType === 'LTC') {
      this.currencyIconImageLocation = '../../assets/svg/Litecoin-icon.svg';
    }
    return this.currencyIconImageLocation;
  }

}
