const { json } = require("express");
const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Order were fetched"
    });
});

router.post ('/', (req, res, next ) => {
    res.status(201).json({
        message: "Order weas created"
    })
})

module.exports = router;
