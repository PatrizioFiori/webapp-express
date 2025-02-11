const express = require("express")
const router = express.Router()
const upload = require("../middlewares/multer")

//import controller
const movieController = require("../controllers/movieController")

router.get("/", movieController.index)
router.get("/:id", movieController.show)
router.post("/:id/recensioni", movieController.storeRecensioni)
router.post("/", upload.single("image"), movieController.store)

router.put("/:id", movieController.update)
router.patch("/:id", movieController.modify)
router.delete("/:id", movieController.destroy)

module.exports = router


