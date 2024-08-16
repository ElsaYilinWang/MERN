const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const placesRoutes = require('./routes/place-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();

});


app.use('./api/places', placesRoutes); // => /api/places...
app.use('./api/users', usersRoutes);

// Route to not-found document
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});
  
// Route to unsupported document
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.join({message: error.message || 'An unknown error occurred!'});
});

// replace <password> with real password (myuser) !
mongoose
    .connect(
        'mongodb+srv://myUser:myuser@cluster0.i9kn9.mongodb.net/'
        )
    .then(
        () => {
            app.listen(5000);
        }
    ).catch(
        err => {
            console.log(err);
        }
    );

