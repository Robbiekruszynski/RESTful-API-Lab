const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);
//add a listener = function that is executed when a new request is added, then update based on the request

server.listen(port);
