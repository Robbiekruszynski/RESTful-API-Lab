const express = require("express");
const app = express();
const productRoutes = require("./api/routes/products");
//use is a method
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "working",
//   });
// });

app.use("/products", productRoutes);
//the first argument is the filter /products 
//so only requests on products will filter to the handle (which is productRoutes) our second argument 
//anything going to /products in the URL will now go to the products.js

module.exports = app;
