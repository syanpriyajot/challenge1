package com.nab.currency.app.controller;

import com.nab.currency.app.dto.Currency;
import com.nab.currency.app.service.CurrencyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/currency")
@RestController
public class CurrencyController {

    private static final Logger logger = LoggerFactory.getLogger(CurrencyController.class);

    @Autowired
    private CurrencyService currencyService;

    @RequestMapping(value = "/{currencyType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public ResponseEntity<Currency> getCurrencyByType(@PathVariable String currencyType) {
        ResponseEntity responseEntity = null;
        try {
            Currency currency = currencyService.getCurrencyByType(currencyType);
            if (currency != null) {
                responseEntity = new ResponseEntity(currency, HttpStatus.OK);
            }
            else {
                responseEntity = new ResponseEntity(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e){
            logger.error("Exception", e);
            responseEntity = new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

}
