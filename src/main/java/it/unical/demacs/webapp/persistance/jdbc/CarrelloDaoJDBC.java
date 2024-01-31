package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.CarrelloDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CarrelloDaoJDBC implements CarrelloDao {
    Connection connection;
    public CarrelloDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean inserisciNelCarrello(String emailUtente, String nomeProdotto) throws SQLException {
        if (connection.isClosed() || connection == null)
            return false;

        PreparedStatement p = connection.prepareStatement("SELECT * FROM carrello WHERE emailutente=? AND prodotti=?");
        p.setString(1, emailUtente);
        p.setString(2, nomeProdotto);
        ResultSet r = p.executeQuery();

        if (r.next()) {
            int q = r.getInt("quantita");
            q++;


            p = connection.prepareStatement("UPDATE carrello SET quantita=? WHERE emailutente=? AND prodotti=?");
            p.setInt(1, q);
            p.setString(2, emailUtente);
            p.setString(3, nomeProdotto);
            p.executeUpdate();


            double prezzoUnitario = r.getDouble("prezzototale") / r.getInt("quantita");
            double prezzoTotale = prezzoUnitario * q;
            p = connection.prepareStatement("UPDATE carrello SET prezzototale=? WHERE emailutente=? AND prodotti=?");
            p.setDouble(1, prezzoTotale);
            p.setString(2, emailUtente);
            p.setString(3, nomeProdotto);
            p.executeUpdate();

            return true;
        }

        PreparedStatement p1 = connection.prepareStatement("SELECT prezzo FROM prodotto WHERE nome=? ");
        p1.setString(1, nomeProdotto);
        ResultSet rs = p1.executeQuery();
        double prezzo = 0.0;
        if (rs.next()) {
            prezzo = rs.getDouble("prezzo");
        }


        p = connection.prepareStatement("INSERT INTO carrello VALUES(?,?,?,?)");
        p.setString(1, nomeProdotto);
        p.setString(2, emailUtente);
        p.setInt(3, 1);
        p.setDouble(4, prezzo);

        p.executeUpdate();

        return true;
    }




    @Override
    public ArrayList<Carrello> prelevaCarrello(Utente utente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello WHERE emailutente=?");
        p.setString(1, utente.getEmail());
        ResultSet r=p.executeQuery();

        ArrayList<Carrello> contenuto=new ArrayList<>();

        while(r.next())
            contenuto.add(new Carrello(r.getString("prodotti"),r.getString("emailUtente"),r.getInt("quantita"),r.getDouble("prezzoTotale")));

        return contenuto;

    }


    @Override
    public void eliminaArticolo(String email, String prodotto) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("DELETE FROM carrello WHERE emailUtente=? AND prodotti=?");
        p.setString(1,email);
        p.setString(2, prodotto);
        p.executeUpdate();
    }

    @Override
    public boolean aggiornaPrezzo(String email, String nomeprodotto, Double prezzo) throws SQLException {
        PreparedStatement p = connection.prepareStatement("UPDATE carrello SET prezzototale=? WHERE emailutente=? AND prodotti=?");
        p.setDouble(1, prezzo);
        p.setString(2, email);
        p.setString(3, nomeprodotto);
        p.executeUpdate();

        return true;
    }

    @Override
    public void svuotaCarrello(String emailUtente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello WHERE emailutente=?");
        p.setString(1,emailUtente);
        ResultSet r=p.executeQuery();

        p=connection.prepareStatement("DELETE FROM carrello where emailUtente=?");
        p.setString(1,emailUtente);
        p.executeUpdate();
    }

}
