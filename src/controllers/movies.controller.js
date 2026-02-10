const movieService = require('../libmovieService');

const index = (req, res) => {
    const = movieService.getMovies();
    res.render('index', { title: 'movie website', movies});
};

const detail = (req, res) => {
    const { id } = req.params;
    const mocie = movieService.getMovieByid(id);
    
    if(!movie) {


        return res.status(404).render()
    }
}