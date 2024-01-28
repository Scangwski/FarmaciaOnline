package it.unical.demacs.webapp.model;

public class Recensione {

    private Integer valutazione;
    private Utente nomeUtente;
    private Prodotto nomeProdotto;
    private String descrizione;

    public Recensione(Utente nomeUtente, Prodotto nomeProdotto, String descrizione, Integer valutazione){
        this.nomeUtente=nomeUtente;
        this.nomeProdotto=nomeProdotto;
        this.descrizione=descrizione;
        this.valutazione=valutazione;
    }

    public Utente getNomeUtente() {return nomeUtente;}

    public Prodotto getNomeProdotto() {return nomeProdotto;}

    public String getDescrizione() {return descrizione;}

    public Integer getValutazione() {return valutazione;}
}
