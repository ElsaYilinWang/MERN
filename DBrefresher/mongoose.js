const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
    'mongodb+srv://myUser:<password>@cluster0.i9kn9.mongodb.net/'
).then(()=> {
    console.log('Connected to DB!')
}).catch(()=>{
    console.log('Connection failed.')
});

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();
    console.log(typeof createdProduct._id);
    res.json(result);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;