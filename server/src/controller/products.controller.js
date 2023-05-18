const ClothesModel = require("../schemes/products.schema");
const ShoesModel = require("../schemes/products.schema");
const AccesoriesModel = require("../schemes/products.schema");
const { v4 } = require("uuid");
const controller = {};

//Get all the products:

controller.getClothes = async (req, res) => {
  try {
    const allClothes = await ClothesModel.find();
    res.status(200).send(allClothes);
  } catch (err) {
    res.status(500).send({ error: "Error al leer el archivo" });
  }
};

controller.getShoes = async (req, res) => {
  try {
    const allShoes = await ShoesModel.find();
    res.status(200).send(allShoes);
  } catch (err) {
    res.status(500).send({ error: "Error al leer el archivo" });
  }
};

controller.getAccesories = async (req, res) => {
  try {
    const allAccesories = await AccesoriesModel.find();
    res.status(200).send(allAccesories);
  } catch (err) {
    res.status(500).send({ error: "Error al leer el archivo" });
  }
};

//Add products:

controller.addProduct = async (req, res) => {
  const { name, price, category, size } = req.body;

  const newProduct = new ClothesModel({
    _id: v4(),
    name,
    price,
    category,
    size,
    brand,
  });

  await newProduct.save();
  res.send("Product saved");
};

//Delete a product:

controller.deleteProduct = async (req, res) => {
  const product = await ClothesModel.findById(req.params.did);

  if (!product) {
    return res.status(409).send("Product dont exist");
  }

  await ProductModel.deleteOne({ _id: product.id });
  res.send("Product deleted");
};

//Edit a product:

controller.editProduct = async (req, res) => {
  const product = await ClothesModel.findById();

  if (!product) {
    return res.status(409).send("User dont exist");
  }
  await productModel.updateOne({ _id: product.id }, {});
  await product.save();
  res.send("User editeed");
};

module.exports = controller;
