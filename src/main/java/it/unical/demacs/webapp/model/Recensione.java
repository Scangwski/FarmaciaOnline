package it.unical.demacs.webapp.model;

public class Recensione {

    private Utente utente;

    private Prodotto prodotto;

    private String titolo;
    private String descrizione;

    public Recensione(Utente utente, Prodotto prodotto, String titolo, String descrizione){
        this.utente=utente;
        this.prodotto=prodotto;
        this.titolo=titolo;
        this.descrizione=descrizione;
    }

    public Utente getUtente() {return utente;}

    public Prodotto getProdotto() {return prodotto;}

    public String getTitolo() {return titolo;}

    public String getDescrizione() {return descrizione;}
}
