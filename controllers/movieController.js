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
    const id = req.params.id
    const sql = "SELECT * FROM movies WHERE id = ?"
    connect.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "DB query failed" })
        if (results.length === 0)
            return res.status(404).json({ err: "post not found" })
        const post = results[0]
        res.json(post)
    })
}

const store = (req, res) => {
    res.send("rotta store")
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