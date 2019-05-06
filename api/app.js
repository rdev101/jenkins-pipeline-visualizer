const express = require("express");
const port = 8080;
const jobs = require("./routes/jobs");

const app = express();
app.use((req, res, next) => {
  next();
});

app.use("/", express.static("../web/dist"));

app.use("/api/v1/jobs", jobs);

app.listen(port, () => console.log(`App listening on port ${port}!`));
