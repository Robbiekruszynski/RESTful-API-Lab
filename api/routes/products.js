const express = require("express");
const router = express.Router();

//since we brought in router on line 2 we can start to use this (on line 5) to bring in more routes
// get is a method that will handling incoming get requests
//second argument is the function
router.get("/", (req, res, next) => {
  res.setMaxListeners(200).json({
    message: " Handeling GET requests to /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handeling POST requests to /products",
  });
});

module.exports = router;
 