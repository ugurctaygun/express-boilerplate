const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  //   res.send("Create new User");
  res.render("form");
});

module.exports = router;
