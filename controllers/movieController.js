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


const storeRecensioni = (req, res) => {
    const id = req.params.id
    const { text, name, vote } = req.body

    const recensioneSql = "INSERT INTO reviews (text, name, vote, movie_id) VALUES (?,?,?,?)"

    connect.query(recensioneSql, [text, name, vote, id], (err, results) => {
        if (err) return res.status(500).json({ error: "DB query failed" });

        res.status(201);
        res.json({ message: "recensione inserita", id: results.insertId })

    })
}

const store = (req, res) => {
    console.log(req);
    const { title, director, abstract, genre } = req.body
    const imageName = req.file.filename

    const sql = "INSERT INTO movies (title, director, genre, abstract, image) VALUES (?,?,?,?,?)"

    connect.query(sql, [title, director, abstract, genre, imageName], (err, results) => {
        if (err) return res.status(500).json({ error: "DB query failed" });
        res.status(201)
        res.json({ stato: "success", message: "film aggiunto" })
    }
    )
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
    storeRecensioni,
    store,
    update,
    modify,
    destroy
}