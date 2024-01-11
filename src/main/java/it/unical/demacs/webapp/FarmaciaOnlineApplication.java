package it.unical.demacs.webapp;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Offerta;
import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.OffertaDao;
import it.unical.demacs.webapp.persistance.ProdottoDao;
import it.unical.demacs.webapp.persistance.UtenteDao;
import it.unical.demacs.webapp.persistance.jdbc.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.SQLException;

@SpringBootApplication
public class FarmaciaOnlineApplication {

	public static void main(String[] args) throws SQLException {SpringApplication.run(FarmaciaOnlineApplication.class, args);}

}
