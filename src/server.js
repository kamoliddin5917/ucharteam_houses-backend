const express = require("express");
const path = require("path");
const { PORT } = require("./config");

const app = express();

app.use("/media", express.static(path.join(__dirname, "./uploads")));
app.use(express.json());
app.use(require("cors")());
app.use(require("./routes/routes"));

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
