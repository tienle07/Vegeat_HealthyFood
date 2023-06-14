const ingredientsController = require("../controllers/ingredientsController");
const router = require("express").Router();
const middleware = require('../utils/middleware');

router.get("/search", middleware.checkLogin, middleware.authenticateToken, ingredientsController.search);
router.get("/getAllIngredient", middleware.checkLogin, middleware.authenticateToken, ingredientsController.getAllIngredients);
router.get("/", middleware.checkLogin, middleware.authenticateToken, ingredientsController.getIngredients);
router.post('/bulk', middleware.checkLogin, middleware.authenticateToken, ingredientsController.bulk);
router.post('/select', middleware.checkLogin, middleware.authenticateToken, ingredientsController.select);
router.post('/remove', middleware.checkLogin, middleware.authenticateToken, ingredientsController.remove);

module.exports = router;