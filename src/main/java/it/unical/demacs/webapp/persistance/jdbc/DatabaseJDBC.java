package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.persistance.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseJDBC implements Database {
    private static DatabaseJDBC instance = null;

    Connection connection;

    public static DatabaseJDBC getInstance()
    {
        if (instance == null)
            instance = new DatabaseJDBC();
        return instance;
    }

    private DatabaseJDBC()
    {
        try
        {
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/farmaciaOnline", "postgres", "ea");
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    public boolean checkConnection() {
        try {
            if(connection == null || connection.isClosed())
                return false;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return true;
    }

    public Connection getConnection() {
        return connection;
    }

    @Override
    public UtenteDao getUtenteDao() { return new UtenteDaoJDBC(connection);
    }

    @Override
    public RicettaDao getRicettaDao() {
        return null;
    }

    @Override
    public RecensioneDao getRecensioneDao() {
        return null;
    }

    @Override
    public ProdottoDao getProdottoDao() {
        return null;
    }

    @Override
    public PreferitiDao getPreferitiDao() {
        return null;
    }

    @Override
    public OffertaDao getOffertaDao() {
        return null;
    }

    @Override
    public CarrelloDao getCarrelloDao() {
        return null;
    }
}
