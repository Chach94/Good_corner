-- SQLite
/* ===== Création de la table ===== */

CREATE TABLE ad 
(
        title VARCHAR(100) NOT NULL, 
        description TEXT, 
        owner VARCHAR(100) NOT NULL, 
        price INT, 
        picture VARCHAR(100), 
        location VARCHAR(100), 
        createdAt DATE, 
        categories VARCHAR(100)
)

/* ==== Insertion des élèments ==== */

INSERT INTO ad (title, description,owner,price,picture, location, createdAt, categories) VALUES
('Téléviseur LED Samsung 55 pouces','Téléviseur LED Samsung de 55 pouces en excellent état.','Marie Dupont','400', 'lien image','Lyon', '2023-11-15','électronique') 

INSERT INTO ad (title, description,owner,price,picture, location, createdAt, categories) VALUES
('Canapé convertible en cuir','Canapé en cuir noir, convertible en lit. ','Pierre Martin','350 ', 'lien image','Paris', '2023-11-16','Maison et Jardin'),
('Vélo de route Giant','Vélo de route Giant en aluminium, parfait pour les amateurs de cyclisme. ','Jean-Paul Lambert','600 ', 'lien image','Bordeaux', '2023-11-17','Sports et Loisirs'),
('iPhone 11 Pro 256 Go','iPhone 11 Pro en excellent état, 256 Go de stockage, écran OLED, appareil photo de haute qualité. ','Sophie Lefebvre ','650 ', 'lien image','Paris', '2023-11-18','électronique'),  
('Cours de cuisine française','Cours de cuisine française avec un chef expérimenté. Apprenez à préparer des plats délicieux. ','Antoine Dubois ','40 ', 'lien image','Lyon', '2023-11-19',' Cours et Formations'),  
('Tapis de yoga antidérapant','Tapis de yoga antidérapant de haute qualité, idéal pour la pratique du yoga à la maison ou en studio. ',' Céline Moreau ','20 ', 'lien image','Bordeaux', '2023-11-16','Sports et Loisirs'),
('Livre - Classique de la littérature','Livre  en excellent état, un classique de la littérature. Une belle lecture à petit prix. ',' Sophie Leroux ','10 ', 'lien image','Paris', '2023-11-17','Livres'),
('Meubles de bureau en chêne','Ensemble de meubles de bureau en chêne massif, comprenant un bureau, une chaise et une étagère.',' Éric Leclerc ','300 ', 'lien image','Bordeaux', '2023-11-18','Maison et Jardin'),
('Montre-bracelet en acier inoxydable','Montre-bracelet élégante en acier inoxydable, avec un design moderne et une précision suisse.',' Charlotte Girard','150', 'lien image','Paris', '2023-11-19','Mode et Accessoires'),
('Plant de basilic bio','Plant de basilic bio, prêt à être transplanté dans votre jardin ou sur votre rebord de fenêtre. ','Élodie Martin','5', 'lien image','Lyon', '2023-11-17','Maison et jardin')