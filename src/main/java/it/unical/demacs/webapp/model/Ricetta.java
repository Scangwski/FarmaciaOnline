package it.unical.demacs.webapp.model;

public class Ricetta {
    private String nomeMedico;
    private String nomeUtente;
    private String idProdotto;

    public Ricetta(String nomeMedico,String nomeUtente, String idProdotto ){
       this.nomeMedico=nomeMedico;
       this.nomeUtente=nomeUtente;
       this.idProdotto=idProdotto;
    }

    public String getNomeMedico() {return nomeMedico;}

    public String getNomeUtente() {return nomeUtente;}

    public String getIdProdotto() {return idProdotto;}
}
