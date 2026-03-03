require('dotenv').config();
const express = require('express');
const path = require('path');

const moviesReouter = require('./src/routes/movies.routes');
const { title } = require('process');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', moviesReouter);


app.use((req, res, next) => {
    res.status(404).render('404', { title: 'webpage not found'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong')
})

app.listen(PORT, () => {
    console.log(`server drivers on http://localhost:${PORT}`);
});