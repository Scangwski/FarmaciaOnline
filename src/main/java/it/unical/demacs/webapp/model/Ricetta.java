package it.unical.demacs.webapp.model;

public class Ricetta {


    private String emailutente;

    private String codiceRicetta;

    public Ricetta(String emailutente,String codiceRicetta ){
        this.emailutente=emailutente;
        this.codiceRicetta=codiceRicetta;

    }

    public String getEmailutente() {return emailutente;}

    public String getCodiceRicetta() {
        return codiceRicetta;
    }
}
