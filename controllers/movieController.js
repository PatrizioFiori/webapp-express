const connect = require("../data/db")

const index = (req, res) => {
    res.send("index")
}

const show = (req, res) => {
    const id = req.params.id
    res.send(`show ${id}`)
}

const store = (req, res) => {
    res.send("store")
}

const update = (req, res) => {
    const id = req.params.id
    res.send(`update ${id}`)
}

const modify = (req, res) => {
    const id = req.params.id
    res.send(`modify ${id}`)
}

const destroy = (req, res) => {
    const id = req.params.id
    res.send(`destroy ${id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}