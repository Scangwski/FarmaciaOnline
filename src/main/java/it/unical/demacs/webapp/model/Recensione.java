package it.unical.demacs.webapp.model;

public class Recensione {

    private Integer valutazione;
    private String nomeUtente;
    private String nomeProdotto;
    private String descrizione;

    public Recensione(String nomeUtente, String nomeProdotto, String descrizione, Integer valutazione){
        this.nomeUtente=nomeUtente;
        this.nomeProdotto=nomeProdotto;
        this.descrizione=descrizione;
        this.valutazione=valutazione;
    }

    public String getNomeUtente() {return nomeUtente;}

    public String getNomeProdotto() {return nomeProdotto;}

    public String getDescrizione() {return descrizione;}

    public Integer getValutazione() {return valutazione;}
}
