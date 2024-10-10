CREATE TABLE Utilisateur (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    prenoms TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    mot_de_passe TEXT NOT NULL,
    date_naissance DATE NOT NULL,
    numero_securite_sociale TEXT NOT NULL UNIQUE CHECK (numero_securite_sociale GLOB '[0-9]*' AND length(numero_securite_sociale) = 15),
    telephone TEXT NOT NULL UNIQUE CHECK (telephone GLOB '[0-9]*' AND length(telephone) = 10),
    adresse TEXT NOT NULL,
    code_postal TEXT NOT NULL CHECK (code_postal GLOB '[0-9]*' AND length(code_postal) = 5),
    token_reinitialisation TEXT,
    date_expiration_token DATETIME
);
