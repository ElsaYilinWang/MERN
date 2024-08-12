const express = require('express');

const bodyParser = require('body-parser');

const placeRoutes = require('./routes/place-routes');

const app = express();

app.use('./api/places', placeRoutes); // => /api/places...

app.listen(5000);