package it.unical.demacs.webapp.model;

public class Carrello {

    private String prodotti;
    String emailUtente;
    private Integer quantita;
    private Double prezzoTotale;

    public Carrello(String prodotti, String emailUtente,Integer quantita, Double prezzoTotale) {
        this.prodotti = prodotti;
        this.emailUtente=emailUtente;
        this.quantita=quantita;
        this.prezzoTotale = prezzoTotale;
    }


    public String getProdotti() {return prodotti;}

    public String getEmailUtente() {return emailUtente;}

    public Integer getQuantita() {return quantita;}

    public Double getPrezzoTotale() {return prezzoTotale;}

}


