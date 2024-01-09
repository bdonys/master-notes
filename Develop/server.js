const express = require('express');
const routes = require('./routes'); 



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.get('/notes', (req,  res) => {
//     res.sendFile(__dirname, './public/notes.html');
// });


// app.get('/', (req, res) => {
//     res.sendFile(__dirname, './public/index.html');
// });

app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));