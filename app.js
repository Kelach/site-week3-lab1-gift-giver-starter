const morgan = require("morgan");
const express = require("express");
const router = require("./routes/gift-exchange");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(`/gift-exchange`, router);

app.get("/", (request, response)=>{
    response.json({"ping": "pong"});
})

module.exports = app;