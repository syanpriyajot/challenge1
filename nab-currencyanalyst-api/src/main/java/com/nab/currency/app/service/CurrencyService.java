package com.nab.currency.app.service;

import com.nab.currency.app.dto.Currency;

import java.io.IOException;

public interface CurrencyService {

    Currency getCurrencyByType(String type) throws IOException;
}
