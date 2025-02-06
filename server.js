const express = require("express")
const app = express()
const port = process.env.PORT || 3000

//import middleware
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

const moviesRouter = require("./routers/movies")

//asset statici
app.use(express.static("public"))

//parsing body
app.use(express.json())

//endpoint
app.get("/", (req, res) => {
    res.send("server connesso")
})

app.use("/movies", moviesRouter)

//gestione errori 404 e 500 tramite middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`sono in ascolto alla porta ${port}`);

})