const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
    required: true,
  }],
  steps: [String],
  time: Number,
  nutrition: {
    protein: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
  },
  premium: {
    type: Boolean,
    default: 'false'
  },
  image: {
    type: String,
    default: 'https://i.ibb.co/CKXybgW/background5-3x.png'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
