const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.use((requete, reponse, next) => {
    reponse.setHeader('Access-control-Allow-Origin', '*');
    reponse.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    reponse.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

router.get('/', (requete, reponse, next) => {
    Product.find() // Récupère tous les produits dans la base de données
    .then( products => reponse.status(200).json({products})) // Envoie une réponse avec un statut 200 et la liste des produits
    .catch(error => reponse.status(400).json({error})) // En cas d'erreur, retourne une réponse 400 avec l'erreur
});


router.get('/:id', (requete, reponse, next) => {
    Product.findOne({_id: requete.params.id}) 
    .then( product => reponse.status(200).json({product})) 
    .catch(error => reponse.status(400).json({error})) 
});

router.post('/', (requete, reponse, next) => {
    const newProduct = new Product({
        ...requete.body
    });
    newProduct.save() 
    .then((product) => reponse.status(201).json({product})) 
    .catch(error => reponse.status(400).json({error})) 
});

router.put('/:id', (requete, reponse, next) => {
    Product.updateOne({_id: requete.params.id}, {...requete.body, _id: requete.params.id}) // Récupère le produit dans la base de données
    .then( () => reponse.status(200).json({message: 'Modifie'})) // Envoie une réponse avec un statut 200 et le produit
    .catch(error => reponse.status(400).json({error})) // En cas d'erreur, retourne une réponse 400 avec l'erreur
});


router.delete('/:id', (requete, reponse, next) => {
    Product.deleteOne({_id: requete.params.id}) // Récupère le produit dans la base de données
    .then( () => reponse.status(200).json({message: 'Supprimé'})) // Envoie une réponse avec un statut 200 et le produit
    .catch(error => reponse.status(400).json({error})) // En cas d'erreur, retourne une réponse 400 avec l'erreur
});

module.exports = router;