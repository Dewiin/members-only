const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter");
const postsRouter = require("./routes/postsRouter");
const formsRouter = require("./routes/formsRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/form", formsRouter);

// Run
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}!`));
