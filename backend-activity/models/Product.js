// Configuration de la base de données (MongoDB)
const mongoose = require('mongoose')

const productSchema = mongoose.Schema ({
    name:        { type: String, required: true},
    description: { type: String, required: true},
    price:       { type: Number, required: true},
    inStock:     { type: Boolean, required: true},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;