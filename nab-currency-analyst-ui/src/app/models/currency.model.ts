import { Quote } from './quote.model';

export class Currency {

  public currency: string;
  public date: string;
  public quotes: Quote[] = [];
  public buyQuote: Quote;
  public sellQuote: Quote;

}
