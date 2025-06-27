const { Router } = require("express");
const postsController = require("../controllers/postsController");
const postsRouter = Router();

postsRouter.get("/", postsController.postsGet);

module.exports = postsRouter;