package it.unical.demacs.webapp.model;

public class Carrello {

    private String prodotti;
    private Utente utente;
    private Integer quantita;
    private Double prezzoTotale;

    public Carrello(String prodotti, Utente utente, Double prezzoTotale) {
        this.prodotti = prodotti;
        this.quantita=quantita;
        this.prezzoTotale = prezzoTotale;
    }


    public String getProdotti() {return prodotti;}

    public Utente getUtente() {return utente;}

    public Integer getQuantita() {return quantita;}

    public Double getPrezzoTotale() {return prezzoTotale;}

}


