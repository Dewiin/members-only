const { Router } = require("express");
const formsController = require("../controllers/formsController");
const formsRouter = Router();

formsRouter.get("/register", formsController.registerGet);
formsRouter.post("/register", formsController.registerPost);
formsRouter.get("/login", formsController.loginGet);
formsRouter.post("/login", formsController.loginPost);

module.exports = formsRouter;
