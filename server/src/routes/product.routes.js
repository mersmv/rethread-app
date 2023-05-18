const express = require("express");
const controller = require("../controller/products.controller");

const productsRoutes = express.Router();

productsRoutes.get("/", controller.getClothes);
productsRoutes.get("/", controller.getAccesories);
productsRoutes.get("/", controller.getShoes);
productsRoutes.post("/", controller.addProduct);
productsRoutes.delete("/", controller.deleteProduct);
productsRoutes.patch("/", controller.editProduct);

module.exports = productsRoutes;
