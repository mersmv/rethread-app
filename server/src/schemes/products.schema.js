const mongoose = require("mongoose");

const ClothesSchema = mongoose.Schema({
  _id: String,
  name: String,
  price: Number,
  category: String,
  size: String,
  brand: String,
});

const ClothesModel = mongoose.model("Clothes", ClothesSchema);

const ShoesSchema = mongoose.Schema({
  _id: String,
  name: String,
  price: String,
  size: String,
  category: String,
  brand: String,
});

const ShoesModel = mongoose.model("Shoes", ShoesSchema);

const AccesoriesSchema = mongoose.Schema({
  _id: String,
  name: String,
  price: String,
  category: String,
  brand: String,
});

const AccesoriesModel = mongoose.model("Accesories", AccesoriesSchema);

module.exports = ClothesModel;
module.exports = ShoesModel;
module.exports = AccesoriesModel;
