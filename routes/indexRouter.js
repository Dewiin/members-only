const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/logout", indexController.logoutGet);
indexRouter.get("/new-post", indexController.createGet);
indexRouter.post("/new-post", indexController.createPost);

module.exports = indexRouter;
