const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  console.log("Getting /");
  //   res.status(200).send(createTemplate());
  //   res.download("server.js");
  //   res.status(500).json({ message: "Somethin went wrong" });
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function createTemplate() {
  let template = `
    <div class="express-response">
        <p>Hello</p>
    </div>`;
  return template;
}

app.listen(3000);
