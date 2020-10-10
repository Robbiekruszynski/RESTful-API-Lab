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

//get specific ID for an item
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "Percy") {
    res.status(200).json({
      message: "You've found me, OH YEAH",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed an ID",
    });
  }
});

module.exports = router;
