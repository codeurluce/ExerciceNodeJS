const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();  // Crée l'instance de l'application Express
const port = process.env.PORT || 3000;
app.use(express.json());

// Connnexion à mongoDB
mongoose.connect('mongodb+srv://Luce2:KlBGzSYKWhzK6Kxd@cluster0.b7bgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(()=> console.log('Connexion MongoDB reussi'))
.catch(error => console.log(error));


// Routes
app.use('/api/products', productRoutes);



app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API 🚀');
});
// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

