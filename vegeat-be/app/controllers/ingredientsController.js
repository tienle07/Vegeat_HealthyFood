const Ingredient = require('../models/Ingredient ');
const bcrypt = require("bcrypt");
const _const = require('../config/constant')
const jwt = require('jsonwebtoken');

const ingredientsController = {
    getAllIngredients: async (req, res) => {
        try {
            // Truy vấn tất cả nguyên liệu
            const ingredients = await Ingredient.find();

            res.json(ingredients);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    select: async (req, res) => {
        try {
            const user = req.user;
            const selectedIngredients = req.body;

            // Cập nhật danh sách nguyên liệu đã chọn cho người dùng
            await Ingredient.updateMany(
                { _id: { $in: selectedIngredients } },
                { $addToSet: { users: user._id } }
            );

            res.json({ message: 'Selected ingredients saved successfully.' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    remove: async (req, res) => {
        try {
            const { userIngredients } = req.body;
            const user = req.user;

            // Xóa danh sách nguyên liệu của người dùng được truyền lên
            await Ingredient.updateMany(
                { _id: { $in: userIngredients }, users: user._id },
                { $pull: { users: user._id } }
            );

            res.json({ message: 'Removed user ingredients successfully.' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    bulk: async (req, res) => {
        try {
            const ingredients = req.body;

            // Thêm danh sách nguyên liệu vào cơ sở dữ liệu
            const addedIngredients = await Ingredient.insertMany(ingredients);

            res.json(addedIngredients);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    search: async (req, res) => {
        try {
            const { query } = req.query;

            // Tìm kiếm nguyên liệu dựa trên tên nguyên liệu
            const ingredients = await Ingredient.find({ name: { $regex: query, $options: 'i' } });

            res.json(ingredients);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getIngredients: async (req, res) => {
        try {
            const user = req.user;

            // Truy vấn nguyên liệu dựa trên thông tin người dùng đã xác thực
            const ingredients = await Ingredient.find({ users: user._id });

            res.json(ingredients);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
}

module.exports = ingredientsController;