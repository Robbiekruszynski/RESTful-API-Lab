const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//handle errors
app.use((req, res, next) => {
  const error = new Error("Sorry, not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//the first argument is the filter /products
//so only requests on products will filter to the handle (which is productRoutes) our second argument
//anything going to /products in the URL will now go to the products.js

module.exports = app;
