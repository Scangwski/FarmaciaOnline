package it.unical.demacs.webapp.model;

public class Utente implements java.io.Serializable{

    private String nomeUtente;
    private String nome;
    private String cognome;
    private String email;
    private String password;

    private Integer ricetta;

    private String tipoUtente;

    public Utente(String nomeUtente, String nome, String cognome, String email, String password,Integer ricetta, String tipoUtente )
    {
        this.nomeUtente = nomeUtente;
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.password=password;
        this.ricetta=ricetta;
        this.tipoUtente=tipoUtente;
    }

    public String getNomeUtente() {return nomeUtente;}

    public void setNomeUtente(String nomeUtente) {this.nomeUtente = nomeUtente;}

    public String getNome() {return nome;}

    public void setNome(String nome) {this.nome = nome;}

    public String getCognome() {return cognome;}

    public void setCognome(String cognome) {this.cognome = cognome;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public String getPassword() {return password;}

    public Integer getRicetta() {return ricetta;}

    public void setRicetta(Integer ricetta) {this.ricetta = ricetta;}

    public String getTipoUtente() {return tipoUtente;}

    public void setTipoUtente(String tipoUtente) {this.tipoUtente = tipoUtente;}
}
