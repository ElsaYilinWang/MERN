const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://myUser:<password>@cluster0.i9kn9.mongodb.net/';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name : req.body.name,
        price: req.body.price
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('products').inserOne(newProduct);

    } catch(error){
        return res.json({message : 'Could not store data.'});
    }

    client.close();

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);

    let products;

    try {
        await client.connect();
        const db = cient.db();
        products = await db.collection('products').find().toArray();
    } catch (error){

        return res.json({message : 'Could not retrieve products.'});
    }
    client.close();
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;