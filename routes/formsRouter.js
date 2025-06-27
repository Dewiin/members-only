const { Router } = require("express");
const formsController = require("../controllers/formsController");
const formsRouter = Router();

formsRouter.get("/register", formsController.registerGet);
formsRouter.get("/login", formsController.loginGet);

module.exports = formsRouter;
