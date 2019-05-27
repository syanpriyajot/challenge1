import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CurrencyService } from '../../../services/currency.service';
import { Currency } from '../../../models/currency.model';
import { CurrencyResolve } from '../../../shared/resolve/currency.resolve';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit, DoCheck {

  private currencyDetailsArray: Currency = new Currency();
  private currencyLogoLocation: string;
  private dateFormat: string = 'DD-MM-YYYY';
  private profit: string;
  private currencyDetailsDate: string;
  private bestBuyTime: string;
  private bestSellTime: string;

  constructor(private currencyService: CurrencyService,
              private currencyResolve: CurrencyResolve,
              private activatedRoute: ActivatedRoute) { }

 public ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.currencyDetailsArray = data['currency'];
      console.log(this.currencyDetailsArray['currency']);
    });
    this.profit = this.getBestProfit();
  }

  public ngDoCheck() {
   this.currencyDetailsDate = moment(this.currencyDetailsArray.date).format(this.dateFormat);
   this.bestBuyTime = moment(this.currencyDetailsArray.buyQuote.time, "hhmm").format("hh:mm A");
   this.bestSellTime = moment(this.currencyDetailsArray.sellQuote.time, "hhmm").format("hh:mm A");

  }

  public getBestProfit(): string {
    let calculatedProfit;
    calculatedProfit = (this.currencyDetailsArray.sellQuote.price - this.currencyDetailsArray.buyQuote.price);
    return calculatedProfit.toFixed(2);
  }

  getFormattedTime(time: string) {
    return moment(time,"hhmm").format("hh:mm A")
  }

  get cryptoLogo(): string {
    if (this.currencyDetailsArray.currency === 'BTC') {
      this.currencyLogoLocation = '../../assets/img/Bitcoin-Logo.png';
    } else if (this.currencyDetailsArray.currency === 'ETH') {
      this.currencyLogoLocation = '../../assets/img/Ethereum-Logo.png';
    } else if (this.currencyDetailsArray.currency === 'LTC') {
      this.currencyLogoLocation = '../../assets/img/Litecoin-Logo.png';
    }
    return this.currencyLogoLocation;
  }

}
