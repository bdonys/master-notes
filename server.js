const express = require('express');
const routes = require('./routes'); 



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => res.status(204));


app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));