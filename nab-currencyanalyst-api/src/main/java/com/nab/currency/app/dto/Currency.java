package com.nab.currency.app.dto;

import com.fasterxml.jackson.annotation.*;

import java.util.List;



@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "currency",
        "date",
        "quotes",
        "buyQuote",
        "sellQuote"
})
public class Currency {

    @JsonProperty("currency")
    private String currency;
    @JsonProperty("date")
    private String date;
    @JsonProperty("quotes")
    private List<Quote> quotes = null;

    @JsonProperty("buyQuote")
    private Quote buyQuote;
    @JsonProperty("sellQuote")
    private Quote sellQuote;

    @JsonProperty("currency")
    public String getCurrency() {
        return currency;
    }

    @JsonProperty("currency")
    public void setCurrency(String currency) {
        this.currency = currency;
    }

    @JsonProperty("date")
    public String getDate() {
        return date;
    }

    @JsonProperty("date")
    public void setDate(String date) {
        this.date = date;
    }

    @JsonProperty("quotes")
    public List<Quote> getQuotes() {
        return quotes;
    }

    @JsonProperty("quotes")
    public void setQuotes(List<Quote> quotes) {
        this.quotes = quotes;
    }

    @JsonProperty("buyQuote")
    public Quote getBuyQuote() {
        return buyQuote;
    }

    @JsonProperty("buyQuote")
    public void setBuyQuote(Quote buyQuote) {
        this.buyQuote = buyQuote;
    }

    @JsonProperty("sellQuote")
    public Quote getSellQuote() {
        return sellQuote;
    }

    @JsonProperty("sellQuote")
    public void setSellQuote(Quote sellQuote) {
        this.sellQuote = sellQuote;
    }

}