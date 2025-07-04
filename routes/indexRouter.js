const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/logout", indexController.logoutGet);
indexRouter.get("/new-post", indexController.createGet);
indexRouter.post("/new-post", indexController.createPost);
indexRouter.post("/become-member", indexController.memberPost);
indexRouter.get("/delete-message/:messageID", indexController.postDelete);
indexRouter.get("/profile/:userID", indexController.profileGet);

module.exports = indexRouter;
