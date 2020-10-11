const { json } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Order were fetched",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Order weas created",
    order: order,
  });
});
//For specific order IDs the /: = dymanic
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order details",
    orderId: req.params.orderId,
  });
});

//To delete a particular order Id
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Delete order",
    orderId: req.params.orderId,
  });
});

module.exports = router;
