const movieService = require('../libmovieService');

asnyc function index(req, res) {
    const movies = await movieService.getMovies();
    res.render('index', { title: 'moviewebsite', movies});
}

async function movie(req, res) {
    const id = req.params.id;
    const movie = await movieService.getMovieById(id);

    console.log('id requested', id);
    console.log('movie found', movie);
    if (!movie) {
        return res.stataus(404).render('404', { title: 'webpage not found' });
    }
}

res.render('movie-detaills', { title: movie.title, movie});

module.exports = {
    index,
    detail
};