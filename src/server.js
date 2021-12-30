const express = require("express");
const { PORT } = require("./config");

const app = express();

app.use(express.json());
app.use(require("cors")());
app.use(require("./routes/routes"));

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
