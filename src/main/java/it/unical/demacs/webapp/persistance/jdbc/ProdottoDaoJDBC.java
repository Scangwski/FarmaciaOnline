package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.ProdottoDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProdottoDaoJDBC implements ProdottoDao {
    Connection connection;
    public ProdottoDaoJDBC(Connection connection){this.connection=connection;}

    @Override
    public boolean aggiungiProdotto(Utente utente,Prodotto prodotto) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;
        if(utente.getTipoUtente()=="farmacista") {
            PreparedStatement p = connection.prepareStatement("INSERT INTO prodotto VALUES(?,?,?,?,?,?,?)");
            p.setString(1, prodotto.getId());
            p.setString(2, prodotto.getNome());
            p.setString(3, prodotto.getDescrizione());
            p.setDouble(4, prodotto.getPrezzo());
            p.setString(5, prodotto.getRichiestaPerRicetta());
            p.setString(6, prodotto.getAzienda());
            p.setString(7, prodotto.getImmagine());
            p.executeUpdate();
            return true;
        }
        return false;
    }

    @Override
    public ArrayList<Prodotto> recuperaProdotti() throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM prodotto");
        ResultSet r =p.executeQuery();
        ArrayList<Prodotto> prodotti=new ArrayList<>();
        while(r.next())
        {
            prodotti.add(new Prodotto(r.getString("id"),r.getString("nome"),r.getString("descrizione"),r.getDouble("prezzo"),r.getString("richiestePerRicetta"),r.getString("azienda"),r.getString("immagine")));
        }
        return prodotti;
    }

    @Override
    public Prodotto caricaProdotto(Utente utente,Prodotto prodotto) throws SQLException {
        if (utente.getTipoUtente() == "farmacista") {
            PreparedStatement p = connection.prepareStatement("SELECT* FROM prodotto WHERE nome=?");
            p.setString(1, prodotto.getNome());
            ResultSet r = p.executeQuery();
            if (r.next())
                return new Prodotto(r.getString("id"), r.getString("nome"), r.getString("descrizione"), r.getDouble("prezzo"), r.getString("richiestePerRicetta"), r.getString("azienda"), r.getString("immagine"));
            return null;
        }
       return null;
    }
}
