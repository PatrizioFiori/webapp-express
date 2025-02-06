const errorHandler = (err, req, res, next) => {
    res.status(500)
    res.json({
        message: err.message,
        status: 500,
        error: "internal server error"
    })

}

module.exports = errorHandler