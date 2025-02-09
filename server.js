const express = require("express")
const app = express()
const port = process.env.PORT || 3000
import cors from "cors"

//import middleware
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")
const imagePath = require("./middlewares/imgPathHandler")

const moviesRouter = require("./routers/movies")

app.use(cors({
    origin: `http://localhost5173`
}))

//asset statici
app.use(express.static("public"))

//parsing body
app.use(express.json())

app.use(imagePath)

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