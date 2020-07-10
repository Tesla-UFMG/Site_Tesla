const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API site-tesla",
        version: "1.3.5"
    })
})

module.exports = router