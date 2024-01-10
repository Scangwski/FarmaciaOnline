package it.unical.demacs.webapp.persistance;

import java.sql.SQLException;

public interface OffertaDao {

    public boolean inserisciOfferta(String id, Double prezzoAttuale, Double prezzoOfferta) throws SQLException;
    public boolean rimuoviOfferta(String id, Double prezzoAttuale, Double prezzoSenzaOfferta) throws SQLException;
}
