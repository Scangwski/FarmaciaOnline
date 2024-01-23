package it.unical.demacs.webapp.model;

public class Recensione {

    private String nomeUtente;

    private String nomeProdotto;

    private String titolo;
    private String descrizione;

    public Recensione(String nomeUtente, String nomeProdotto, String titolo, String descrizione){
        this.nomeUtente=nomeUtente;
        this.nomeProdotto=nomeProdotto;
        this.titolo=titolo;
        this.descrizione=descrizione;
    }

    public String getNomeUtente() {return nomeUtente;}

    public String getNomeProdotto() {return nomeProdotto;}

    public String getTitolo() {return titolo;}

    public String getDescrizione() {return descrizione;}
}
