const recipesController = require("../controllers/recipesController");
const router = require("express").Router();
const middleware = require('../utils/middleware');

router.get("/searchByIngredients", middleware.checkLogin, middleware.authenticateToken, recipesController.searchByIngredients);
router.get("/searchByRecipes", middleware.checkLogin, middleware.authenticateToken, recipesController.searchByRecipes);
router.get("/:id", middleware.checkLogin, middleware.authenticateToken, recipesController.getRecipesById);
router.post('/bulk', middleware.checkLogin, middleware.authenticateToken, recipesController.bulk);

module.exports = router;