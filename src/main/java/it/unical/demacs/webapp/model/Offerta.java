package it.unical.demacs.webapp.model;

public class Offerta {

    private Prodotto prodotto;
    private Double prezzoAttuale;
    private Double prezzoScontato;

    public Offerta(Prodotto prodotto, Double prezzoAttuale, Double prezzoScontato){
        this.prodotto=prodotto;
        this.prezzoAttuale=prezzoAttuale;
        this.prezzoScontato=prezzoScontato;
    }

    public Prodotto getProdotto() {return prodotto;}

    public Double getPrezzoAttuale() {return prezzoAttuale;}

    public Double getPrezzoScontato() {return prezzoScontato;}
}
