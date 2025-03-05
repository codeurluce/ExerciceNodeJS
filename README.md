Cet exercice a été réalisé dans le cadre de l'apprentissage de **Node.js** sur **OpenClassrooms**.  

### 📌 Résumé : Création d'une API REST avec Node, Express et MongoDB  

L'objectif de ce projet est de développer une **API REST** pour une boutique en ligne, permettant la gestion des produits via une base de données **MongoDB**.  

#### ⚙️ Fonctionnalités CRUD :  
- **GET /api/products** : Récupérer la liste de tous les produits.  
- **GET /api/products/:id** : Obtenir un produit spécifique grâce à son **ID**.  
- **POST /api/products** : Ajouter un produit en envoyant un objet avec les champs suivants :  
  - `name` (String) : Nom du produit  
  - `description` (String) : Description du produit  
  - `price` (Number) : Prix du produit  
  - `inStock` (Boolean) : Indique si le produit est en stock  
- **PUT /api/products/:id** : Modifier un produit existant en mettant à jour ses informations.  
- **DELETE /api/products/:id** : Supprimer un produit via son **ID**.  

L'API fonctionne en **local** sur le port **3000** par défaut et accepte les requêtes de toutes origines (**CORS activé**).  

#### 🛠️ Test de l'API avec l'interface front-end  
Un projet **front-end** est fourni pour tester les routes de l'API.  
- **Installation :**  
  1. Cloner le dépôt contenant le projet front-end.  
  2. Installer les dépendances avec `npm install`.  
  3. Lancer l'application avec `npm start`.  
- Une fois l'application ouverte, utiliser le bouton **"TEST ROUTES"** pour vérifier le bon fonctionnement de l'API.

La Solution au quizz https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node.js-express-et-mongodb/exercises/3732: est **GORILLA**  
