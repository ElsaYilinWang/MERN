const express = require('express');

const bodyParser = require('body-parser');

const placeRoutes = require('./routes/place-routes');

const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('./api/places', placeRoutes); // => /api/places...


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

app.listen(5000);