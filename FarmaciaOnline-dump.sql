PGDMP  :    2                 |            farmaciaOnline    16.1    16.1     !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            $           1262    49624    farmaciaOnline    DATABASE     r   CREATE DATABASE "farmaciaOnline" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
     DROP DATABASE "farmaciaOnline";
                postgres    false            �            1259    49625    carrello    TABLE     �   CREATE TABLE public.carrello (
    prodotti character varying NOT NULL,
    emailutente character varying NOT NULL,
    quantita integer NOT NULL,
    prezzototale double precision NOT NULL
);
    DROP TABLE public.carrello;
       public         heap    postgres    false            �            1259    49801    offerta    TABLE     �   CREATE TABLE public.offerta (
    nomeprodotto character varying NOT NULL,
    prezzoattuale character varying NOT NULL,
    prezzoscontato character varying NOT NULL
);
    DROP TABLE public.offerta;
       public         heap    postgres    false            �            1259    49631    prodotto    TABLE     @  CREATE TABLE public.prodotto (
    id character varying NOT NULL,
    nome character varying NOT NULL,
    descrizione character varying NOT NULL,
    prezzo double precision NOT NULL,
    richiestaperricetta character varying NOT NULL,
    azienda character varying NOT NULL,
    immagine character varying NOT NULL
);
    DROP TABLE public.prodotto;
       public         heap    postgres    false            �            1259    49636 
   recensione    TABLE     �   CREATE TABLE public.recensione (
    emailutente character varying NOT NULL,
    nomeprodotto character varying NOT NULL,
    titolo character varying NOT NULL,
    descrizione character varying NOT NULL
);
    DROP TABLE public.recensione;
       public         heap    postgres    false            �            1259    49639    ricetta    TABLE     �   CREATE TABLE public.ricetta (
    nomemedico character varying NOT NULL,
    emailutente character varying NOT NULL,
    idprodotto character varying NOT NULL
);
    DROP TABLE public.ricetta;
       public         heap    postgres    false            �            1259    49642    utente    TABLE     �   CREATE TABLE public.utente (
    nome character varying NOT NULL,
    cognome character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    tipoutente character varying NOT NULL,
    bannato boolean
);
    DROP TABLE public.utente;
       public         heap    postgres    false                      0    49625    carrello 
   TABLE DATA           Q   COPY public.carrello (prodotti, emailutente, quantita, prezzototale) FROM stdin;
    public          postgres    false    215   �                 0    49801    offerta 
   TABLE DATA           N   COPY public.offerta (nomeprodotto, prezzoattuale, prezzoscontato) FROM stdin;
    public          postgres    false    220   �                 0    49631    prodotto 
   TABLE DATA           i   COPY public.prodotto (id, nome, descrizione, prezzo, richiestaperricetta, azienda, immagine) FROM stdin;
    public          postgres    false    216   �                 0    49636 
   recensione 
   TABLE DATA           T   COPY public.recensione (emailutente, nomeprodotto, titolo, descrizione) FROM stdin;
    public          postgres    false    217   O                 0    49639    ricetta 
   TABLE DATA           F   COPY public.ricetta (nomemedico, emailutente, idprodotto) FROM stdin;
    public          postgres    false    218   �                 0    49642    utente 
   TABLE DATA           U   COPY public.utente (nome, cognome, email, password, tipoutente, bannato) FROM stdin;
    public          postgres    false    219   �       �           2606    49648    prodotto prodotto_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.prodotto
    ADD CONSTRAINT prodotto_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.prodotto DROP CONSTRAINT prodotto_pkey;
       public            postgres    false    216            �           2606    49807    utente utente_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT utente_pkey PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.utente DROP CONSTRAINT utente_pkey;
       public            postgres    false    219                  x������ � �            x������ � �         J   x��˱� ��&
�D�i,�J��H���C�?����l���rJ���\v!o6�eb�7a��0���?�CU?(b+�         0   x����M-I�+I��)MN�,�,����LI-N.ʬ���K����� 5l�         $   x��MM�L�����M-I�+I�4426����� ��$         h   x����M�L�O�ѩ���9�*F�*�F*n���)�F��%�Q��N�Y���%FٮU�fnz�e��&����A����Y�if��%���%�y%��1~\1z\\\ v@�     