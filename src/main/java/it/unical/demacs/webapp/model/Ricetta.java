package it.unical.demacs.webapp.model;

public class Ricetta {
    private String medico;
    private Utente utente;
    private Prodotto prodotto;

    public Ricetta(String medico, Utente utente, Prodotto prodotto){
        this.medico=medico;
        this.utente=utente;
        this.prodotto=prodotto;
    }

    public String getMedico() {return medico;}

    public Utente getUtente() {return utente;}

    public Prodotto getProdotto() {return prodotto;}
}
