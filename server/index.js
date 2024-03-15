const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.post("/upload", (req, res) => {
    const file = req.files.file;
    file.mv(`./public/img/${file.name}`);
    return res.json(file.name);
})

app.get("*", (req, res) => res.sendFile(__dirname + "/index.html"))

app.listen(5000, () => console.log("Server on"))