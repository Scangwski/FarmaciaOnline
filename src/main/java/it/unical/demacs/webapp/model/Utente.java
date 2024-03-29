package it.unical.demacs.webapp.model;

public class Utente implements java.io.Serializable {

    private String nome;
    private String cognome;
    private String email;
    private String password;
    private String tipoUtente;
    private boolean bannato = false;
    private String google_id;

    public Utente(String nome, String cognome, String email, String password, String tipoUtente, boolean bannato,String google_id) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.tipoUtente = tipoUtente;
        this.bannato = bannato;
        this.google_id= google_id;

    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public String getTipoUtente() {
        return tipoUtente;
    }

    public void setTipoUtente(String tipoUtente) {
        this.tipoUtente = tipoUtente;
    }

    public void setBannato(boolean bannato) {
        this.bannato = bannato;
    }

    public boolean getBannato() {
        return bannato;
    }

    public String getGoogle_id() {return google_id;}

    public boolean isBannato() {
        return bannato;
    }
}