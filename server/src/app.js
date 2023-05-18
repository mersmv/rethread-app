const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const productsRoutes = require("./routes/product.routes");

// Middlewares para cliente:
app.use(cors());
app.use(express.json());

//Uso de rutas:
app.use("/rethread/products", productsRoutes);

//Iniciar el servidor:
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
    console.log("Conection error");
  }
  app.listen(
    process.env.PORT,
    console.log(`Server listening on Port ${process.env.PORT}`)
  );
};

startServer();
