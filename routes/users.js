const express = require("express");
const users = require("../data/users");
const router = express.Router();

//Express works top to bottom , order matters

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  //   res.send("Create new User");
  res.render("form");
});

// : dynamic parameter
router.get("/:id", (req, res) => {
  req.params.id;
  res.send(`Get user by ID ${req.params.id}`);
});

// Chain similar methods with route()
router
  .route("/:id")
  .get(specialOffer, (req, res) => {
    res.render("shop", { users: req.user });
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user by ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete user by ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function specialOffer(req, res, next) {
  if (req.user.loyalty % 10 === 0) {
    req.user.personalOffer = true;
    next();
  } else {
    next();
  }
}

module.exports = router;
