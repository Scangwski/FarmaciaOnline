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
        if(utente.getTipoUtente()=="Farmacista" || utente.getTipoUtente()=="Admin") {
            PreparedStatement p = connection.prepareStatement("INSERT INTO prodotto VALUES(?,?,?,?,?,?,?)");
            p.setString(1, prodotto.getId());
            p.setString(2, prodotto.getNome());
            p.setString(3, prodotto.getDescrizione());
            p.setDouble(4, prodotto.getPrezzo());
            p.setString(5, prodotto.getCategoria());
            p.setInt(6, prodotto.getQuantita());
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
            prodotti.add(new Prodotto(r.getString("id"),r.getString("nome"),r.getString("descrizione"),r.getDouble("prezzo"),r.getString("categoria"),r.getInt("quantita"),r.getString("immagine")));
        }
        return prodotti;
    }

    @Override
    public Prodotto caricaProdotto(String nomeProdotto) throws SQLException {
            PreparedStatement p = connection.prepareStatement("SELECT* FROM prodotto WHERE nome=?");
            p.setString(1, nomeProdotto);
            ResultSet r = p.executeQuery();
            if (r.next())
                return new Prodotto(r.getString("id"),r.getString("nome"),r.getString("descrizione"),r.getDouble("prezzo"),r.getString("categoria"),r.getInt("quantita"),r.getString("immagine"));
            return null;
    }

    @Override
    public boolean rimuoviProdotto(Utente utente,Prodotto prodotto) throws SQLException {
        if (utente.getTipoUtente() == "Farmacista" || utente.getTipoUtente()=="Admin") {
            PreparedStatement p = connection.prepareStatement("DELETE FROM prodotto WHERE nome=?");
            p.setString(1, prodotto.getNome());
            int rowsDeleted = p.executeUpdate();

            return rowsDeleted > 0;
        }
        return false;
    }

    public ArrayList<Prodotto> ricercaProdotti(String filtro, String ordinamento) throws SQLException {
        String query = "SELECT * FROM prodotto WHERE id LIKE ? OR nome LIKE ? OR categoria LIKE ?";

        if (ordinamento != null && !ordinamento.isEmpty()) {
            if (ordinamento.equalsIgnoreCase("prezzoCrescente")) {
                query += " ORDER BY prezzo ASC";
            } else if (ordinamento.equalsIgnoreCase("prezzoDecrescente")) {
                query += " ORDER BY prezzo DESC";
            } else if (ordinamento.equalsIgnoreCase("alfabeticoCrescente")) {
                query += " ORDER BY nome ASC";
            }
            else if (ordinamento.equalsIgnoreCase("alfabeticoDecrescente")) {
                query += " ORDER BY nome DESC";
            }

        }

        PreparedStatement p = connection.prepareStatement(query);
        p.setString(1, "%" + filtro + "%");
        p.setString(2, "%" + filtro + "%");

        ResultSet r = p.executeQuery();

        ArrayList<Prodotto> prodotti = new ArrayList<>();
        while (r.next()) {
            prodotti.add(new Prodotto(
                    r.getString("id"),
                    r.getString("nome"),
                    r.getString("descrizione"),
                    r.getDouble("prezzo"),
                    r.getString("categoria"),
                    r.getInt("quantita"),
                    r.getString("immagine")));
        }

        return prodotti;
    }


}
