package com.nab.currency.app.service.impl;

import com.nab.currency.app.dto.Currency;
import com.nab.currency.app.dto.Quote;
import com.nab.currency.app.service.CurrencyService;
import com.nab.currency.app.util.JsonUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class CurrencyServiceImpl implements CurrencyService {

  private static final Logger logger = LoggerFactory.getLogger(CurrencyServiceImpl.class);

  @Override
  public Currency getCurrencyByType(String currencyType) {
      List<Currency> currency = JsonUtils.fromJson("classpath:data.json");
      for (Currency currentCurrency: currency) {
          if(currentCurrency.getCurrency().equalsIgnoreCase(currencyType)) {
              processCurrencyQuotes(currentCurrency);
              return currentCurrency;
          }
      }
      return null;
    }

    private Currency processCurrencyQuotes(Currency currency) {
        int quotesSize = currency.getQuotes().size();
        if (quotesSize == 0) {
            currency.setBuyQuote(new Quote());
            currency.setSellQuote(new Quote());
        }

        double maximumDiff = 0;
        double minimumPrice = getParsedDoubleVal(currency.getQuotes().get(0).getPrice());
        double maximumPrice = minimumPrice;
        LocalTime firstQuoteTimeValue =  LocalTime.parse(currency.getQuotes().get(0).getTime(), DateTimeFormatter.ofPattern("HHmm"));
        List<Quote> quotesList = currency.getQuotes();

        for (Quote quote : quotesList) {
            double quotePrice = getParsedDoubleVal(quote.getPrice());
            LocalTime currencyQuoteTimeValue = LocalTime.parse(quote.getTime(), DateTimeFormatter.ofPattern("HHmm"));
            if (quotePrice > maximumPrice && currencyQuoteTimeValue.isAfter(firstQuoteTimeValue)) {
                maximumPrice = quotePrice;
                double localDiff = maximumPrice - maximumPrice;
                if (localDiff > maximumDiff) {
                    maximumDiff = localDiff;
                }
            } else if (quotePrice < minimumPrice && currencyQuoteTimeValue.isBefore(firstQuoteTimeValue)) {
                minimumPrice = maximumPrice = quotePrice;
            }
        }

        for (Quote quote : currency.getQuotes()) {
            double quoteDoubleVal = getParsedDoubleVal(quote.getPrice());
            if (quoteDoubleVal == minimumPrice)
                currency.setBuyQuote(quote);
            if (quoteDoubleVal == maximumPrice)
                currency.setSellQuote(quote);
        }
        return currency;
    }

    private Double getParsedDoubleVal(String value) {
        if (value != null) {
            return Double.parseDouble(value);
        }
        return null;
    }

}
