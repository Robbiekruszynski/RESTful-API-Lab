const express = require("express");
const app = express();
const morgan = require("morgan");

  
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//the first argument is the filter /products
//so only requests on products will filter to the handle (which is productRoutes) our second argument
//anything going to /products in the URL will now go to the products.js

module.exports = app;
