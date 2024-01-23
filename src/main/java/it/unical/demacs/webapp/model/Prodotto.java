package it.unical.demacs.webapp.model;

public class Prodotto {

    private String id;
    private String nome;
    private String descrizione;
    private Double prezzo;
    private String categoria;
    private Integer quantita;
    private String immagine;

    public Prodotto(String id, String nome, String descrizione,Double prezzo, String categoria,Integer quantita,String immagine){
        this.id = id;
        this. nome = nome;
        this.descrizione=descrizione;
        this.prezzo=prezzo;
        this.categoria=categoria;
        this.quantita=quantita;
        this.immagine=immagine;
    }

    public String getId() {return id;}

    public String getNome() {return nome;}

    public String getDescrizione() {return descrizione;}

    public Double getPrezzo() {return prezzo;}

    public String getCategoria() {return categoria;}

    public Integer getQuantita() {return quantita;}

    public String getImmagine() {return immagine;}
}
