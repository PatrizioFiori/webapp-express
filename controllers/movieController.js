const connect = require("../data/db")

const index = (req, res) => {
    const sql = "SELECT * FROM movies";

    connect.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Query al db fallita" });
        }

        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            };
        });

        res.json(movies);
    });
};

//aggiungere l'arrotondamento dei voti e l'array di recensioni
const show = (req, res) => {
    const id = req.params.id;

    const movieSql = "SELECT * FROM movies WHERE id = ?";
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connect.query(movieSql, [id], (err, movieResults) => {
        if (err) {
            return res.status(500).json({ error: "DB query failed" });
        }
        if (movieResults.length === 0) {
            return res.status(404).json({ error: "Movie not found" });
        }
        const movie = movieResults[0];
        movie.image = req.imagePath + movie.image

        connect.query(reviewsSql, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ error: "Failed to fetch reviews" });
            }
            movie.reviews = reviewResults;
            res.json(movie);
        });
    });
};


const store = (req, res) => {
    const id = req.params.id
    const { text, name, vote } = req.body //richiamo i dati dal body

    const recensioneSql = "INSERT INTO reviews (text, name, vote, movie_id) VALUES (?,?,?,?)"

    connect.query(recensioneSql, [text, name, vote, id], (err, results) => {
        if (err) return res.status(500).json({ error: "DB query failed" });

        res.status(201);
        res.json({ message: "recensione inserita", id: results.insertId })

    })
}

const update = (req, res) => {
    const id = req.params.id
    res.send(`rotta update ${id}`)
}

const modify = (req, res) => {
    const id = req.params.id
    res.send(`rotta modify ${id}`)
}

const destroy = (req, res) => {
    const id = req.params.id
    res.send(`rotta destroy ${id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}