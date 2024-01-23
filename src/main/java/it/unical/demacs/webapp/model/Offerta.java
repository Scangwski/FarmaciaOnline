package it.unical.demacs.webapp.model;

public class Offerta {

    private String nomeProdotto;
    private Double prezzoAttuale;
    private Double prezzoScontato;

    public Offerta(String nomeProdotto, Double prezzoAttuale, Double prezzoScontato){
        this.nomeProdotto=nomeProdotto;
        this.prezzoAttuale=prezzoAttuale;
        this.prezzoScontato=prezzoScontato;
    }

    public String getNomeProdotto() {return nomeProdotto;}

    public Double getPrezzoAttuale() {return prezzoAttuale;}

    public Double getPrezzoScontato() {return prezzoScontato;}
}
