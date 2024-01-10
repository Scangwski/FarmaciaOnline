package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Recensione;

public interface Database {

    public UtenteDao getUtenteDao();

    public RicettaDao getRicettaDao();

    public RecensioneDao getRecensioneDao();

    public ProdottoDao getProdottoDao();

    public PreferitiDao getPreferitiDao();

    public OffertaDao getOffertaDao();

    public CarrelloDao getCarrelloDao();
}
