const express = require('express');
const path = require('path');

const moviesReouter = require('.src/')

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


const getMovies = () => {
    const data = fs.readFileSync
    (path.join(__dirname, 'src/data/movies.json'));
    return JSON.parse(data);
};

app.get('/', (req, res) => {
    const movies = getMovies();
    res.render('index', { title: 'movieswebsite', movies});
});


app.get('/movie/id', (req, res) => {
    const movies = getMovies();
    const movie = movies.find(m => m.id === req.params.id);

    if (!movie) {
        return res.status(404).render('404', { title: 'website not found'});
    }

    res.render('movies-details', { title: movie.title});
});

app.listen(PORT, () => {
    console.log(`server drivers on http://localhost${PORT}`);
});