// Importation des modules nécessaires
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const sqlite3 = require('sqlite3').verbose();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'votre_cle_secrete';

app.use(bodyParser.json());

// Configuration de la base de données SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err.message);
    } else {
        console.log('Connexion à la base de données SQLite réussie');
    }
});

// Création de la table Utilisateur si elle n'existe pas déjà
db.run(`
    CREATE TABLE IF NOT EXISTS Utilisateur (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        prenoms TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        mot_de_passe TEXT NOT NULL,
        date_naissance DATE NOT NULL,
        numero_securite_sociale TEXT NOT NULL UNIQUE,
        telephone TEXT NOT NULL UNIQUE,
        adresse TEXT NOT NULL,
        code_postal TEXT NOT NULL,
        token_reinitialisation TEXT,
        date_expiration_token DATETIME
    )
`, (err) => {
    if (err) {
        console.error('Erreur lors de la création de la table Utilisateur:', err.message);
    }
});

// Configuration Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API d\'authentification Node.js',
            version: '1.0.0',
            description: 'API d\'authentification avec JWT, SQLite et Swagger',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: ['Bearer'],
            },
        ],
    },
    apis: ['./index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Génération d'un token JWT
function generateToken(user) {
    return jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
}

// Route de création de compte
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenoms:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *               date_naissance:
 *                 type: string
 *               numero_securite_sociale:
 *                 type: string
 *               telephone:
 *                 type: string
 *               adresse:
 *                 type: string
 *               code_postal:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Erreur de validation
 */
app.post('/register', async (req, res) => {
    try {
        const { nom, prenoms, email, mot_de_passe, date_naissance, numero_securite_sociale, telephone, adresse, code_postal } = req.body;
        if (!nom || !prenoms || !email || !mot_de_passe || !date_naissance || !numero_securite_sociale || !telephone || !adresse || !code_postal) {
            return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

        // Insertion de l'utilisateur dans la base de données
        db.run(
            `INSERT INTO Utilisateur (nom, prenoms, email, mot_de_passe, date_naissance, numero_securite_sociale, telephone, adresse, code_postal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [nom, prenoms, email, hashedPassword, date_naissance, numero_securite_sociale, telephone, adresse, code_postal],
            function (err) {
                if (err) {
                    return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: err.message });
                }
                const token = generateToken({ id: this.lastID });
                return res.status(201).json({ message: 'Utilisateur créé avec succès', token });
            }
        );
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
    }
});

// Route de connexion
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Erreur de validation
 */
app.post('/login', async (req, res) => {
    try {
        const { email, mot_de_passe } = req.body;
        if (!email || !mot_de_passe) {
            return res.status(400).json({ message: 'Veuillez fournir un email et un mot de passe' });
        }

        // Recherche de l'utilisateur dans la base de données
        db.get(`SELECT * FROM Utilisateur WHERE email = ?`, [email], async (err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur', error: err.message });
            }
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            // Vérification du mot de passe
            const isPasswordValid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Mot de passe incorrect' });
            }

            // Génération d'un token JWT
            const token = generateToken(user);

            return res.status(200).json({ message: 'Connexion réussie', token });
        });
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }
});

// Middleware d'authentification
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // <-- Ajoute ce log
    if (!authHeader) {
        return res.status(401).json({ message: 'Aucun header d\'autorisation fourni' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Accès refusé, token manquant' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}


// Route protégée
/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Accéder à une route protégée
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Accès à la ressource protégée accordé
 *       401:
 *         description: Accès refusé, token manquant
 *       403:
 *         description: Token invalide
 */
app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Accès à la ressource protégée accordé', userId: req.user.userId });
});


// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});