const multer = require("multer")


const storage = multer.diskStorage({
    destination: "./public/img/movies",
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)

    }
})
//questo è l'oggetto che gestisce il save del dato
const upload = multer({ storage })

module.exports = upload