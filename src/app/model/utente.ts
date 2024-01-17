export interface Utente{
    nome?: string;
    cognome?: string;
    email: string;
    password: string;
    tipoUtente?: string;
    bannato?: boolean;
}


export interface AuthToken{
    token:string;
}