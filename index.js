const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./Data/courses.json");

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`, port);
});
