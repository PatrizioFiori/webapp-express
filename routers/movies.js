const express = require("express")
const router = express.Router()

//import controller
const movieController = require("../controllers/movieController")

router.get("/", movieController.index)
router.get("/:id", movieController.show)
router.post("/:id/recensioni", movieController.store)
router.put("/:id", movieController.update)
router.patch("/:id", movieController.modify)
router.delete("/:id", movieController.destroy)

module.exports = router


