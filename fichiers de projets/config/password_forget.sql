--- génération token ---
UPDATE Utilisateur 
SET token_reinitialisation = 'generated_token', date_expiration_token = DATETIME('now', '+1 hour') 
WHERE email = 'jean.dupont@example.com';
--- validation du token ---
SELECT * FROM Utilisateur 
WHERE email = 'jean.dupont@example.com' 
AND token_reinitialisation = 'generated_token' 
AND date_expiration_token >= DATETIME('now');
--- reset password ---
UPDATE Utilisateur 
SET mot_de_passe = 'new_hashed_password', token_reinitialisation = NULL, date_expiration_token = NULL 
WHERE email = 'jean.dupont@example.com';

