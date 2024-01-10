package it.unical.demacs.webapp.model;

public class Prodotto {

    private String id;
    private String nome;
    private String descrizione;
    private Double prezzo;

    private Integer richiestaPerRicetta;

    private String azienda;
    private String immagine;

    public Prodotto(String id, String nome, String descrizione,Double prezzo, Integer richiestaPerRicetta,String azienda,String immagine){
        this.id = id;
        this. nome = nome;
        this.descrizione=descrizione;
        this.prezzo=prezzo;
        this.richiestaPerRicetta=richiestaPerRicetta;
        this.azienda=azienda;
        this.immagine=immagine;
    }

    public String getId() {return id;}

    public String getNome() {return nome;}

    public String getDescrizione() {return descrizione;}

    public Double getPrezzo() {return prezzo;}

    public Integer getRichiestaPerRicetta() {return richiestaPerRicetta;}

    public String getAzienda() {return azienda;}

    public String getImmagine() {return immagine;}
}
