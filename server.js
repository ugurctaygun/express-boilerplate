const express = require("express");
const app = express();
const shop = require("./data/shop");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  console.log("Getting /");
  res.render("index", { shop: shop });
});

app.get("/form", (req, res) => {
  res.render("form", { shop: shop });
});

app.get("/shop", (req, res) => {
  res.render("shop", { shop: shop });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.use(express.static(__dirname + "/public"));

app.listen(3000);
