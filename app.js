// simple express app
const express = require('express');
const app = express();
const path = require("path");

// for real time application-> creating http server (for websockets)
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// setting up EJS (for adding real time data into html tags)
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket){
    console.log("Connected");
});

app.get("/", function (req, res){
    res.render("index");
});

server.listen(3000);