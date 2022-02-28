const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/src/assets", express.static("assets"))
app.use("/src/static", express.static("static"))

app.get("/", (_req, res) => {
    res.sendFile(path.join(`${__dirname}/src/static/html/index.html`))
})

app.listen(5000, () => console.log(`Live at https://localhost:5000`));