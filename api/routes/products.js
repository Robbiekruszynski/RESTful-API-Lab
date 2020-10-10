const { json } = require("express");
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
      //line 25 will extract and show the ID
    });
  } else {
    res.status(200).json({
      message: "you passed an ID",
    });
  }
});

//path specific ID for an item
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
      message: "Update product"
  })
});

//delete specific ID for an item
router.delete("/:productId", (req, res, next) => {
    res.status(200).json({
        message: "Delete product"
    })
  });

module.exports = router;
