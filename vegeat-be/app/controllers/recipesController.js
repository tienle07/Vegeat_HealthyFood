const Recipe = require('../models/Recipe');
const bcrypt = require("bcrypt");
const _const = require('../config/constant')
const jwt = require('jsonwebtoken');

const recipesController = {
    bulk: async (req, res) => {
        try {
            const { title, ingredients, steps, time, nutrition, premium } = req.body;

            // Tạo công thức mới với thông tin dinh dưỡng
            const recipe = await Recipe.create({
                title,
                ingredients,
                steps,
                time,
                nutrition,
                premium
            });

            res.status(201).json(recipe);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    searchByIngredients: async (req, res) => {
        try {
            const { ingredients } = req.query;

            // Tìm kiếm công thức dựa trên nguyên liệu
            const recipes = await Recipe.find({ ingredients: { $all: ingredients } })
                .populate('ingredients', ['name', 'image']);

            res.json(recipes);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    },
    searchByRecipes: async (req, res) => {
        try {
            const { title, ingredients } = req.query;

            let query = {};

            // Xây dựng câu truy vấn dựa trên tiêu đề và nguyên liệu (nếu có)
            if (title) {
                query.title = { $regex: title, $options: 'i' };
            }

            if (ingredients && ingredients.length > 0) {
                query.ingredients = { $all: ingredients };
            }

            // Kiểm tra nếu không có tham số tìm kiếm, trả về tất cả công thức
            if (Object.keys(query).length === 0) {
                const recipes = await Recipe.find();
                res.json(recipes);
            } else {
                // Tìm kiếm công thức dựa trên tiêu đề và nguyên liệu
                const recipes = await Recipe.find(query);
                res.json(recipes);
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getRecipesById: async (req, res) => {
        try {
            const { id } = req.params;

            // Tìm công thức dựa trên ID
            const recipe = await Recipe.findById(id).populate('ingredients', ['name', 'image']);

            if (!recipe) {
                return res.status(404).json({ error: 'Recipe not found' });
            }

            res.json(recipe);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
}

module.exports = recipesController;