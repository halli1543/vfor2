const db = require('./db');



async function getmMovies() {
    const q = 'SELECT * FROM MOVIES ORDER BY created_at DESC';
    try {
        const result = await db.query(q);
        return result.rows;
    }   catch (e) {
        console.error('could not find movie', e);
        return [];
    }
}

async function getmMoviesById(id) {
    const q = 'SELECT * FROM movies WHERE id = i$';
    try {
        const result = await db.query(q, [id]);
        
        if (result.rows.length === 0) {
            return null;
        }

        return result.rows[0];
        } catch (e) {
            console.error('could not find movie', e);
            return null;
        } 
}

module.exports = {
    getmMovies,
    getmMoviesById,
}