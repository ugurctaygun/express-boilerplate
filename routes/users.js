const express = require("express");
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
// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user by ID ${req.params.id}`);
// });

// Chain similar methods with route()
router
  .route("/:id")
  .get(specialOffer, (req, res) => {
    res.send(`Get user by ID ${req.user.name}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user by ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete user by ID ${req.params.id}`);
  });

const users = [
  { name: "Uğur", loyalty: 20 },
  { name: "Celal", loyalty: 35 },
  { name: "Taygun", loyalty: 10 },
];
// middleware is run between req and response
// param is a middleware method to run a func everytime
// the param match to url
// next method is used to proceed from middleware to the next step
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function specialOffer(req, res, next) {
  if (req.user.loyalty % 10 === 0) {
    res.setHeader("Content-Type", "text/plain");
    res.write(`Special offer for ${req.user.name}`);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.write(`No offer for ${req.user.name}`);
    res.end();
  }
}

module.exports = router;
