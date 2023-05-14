import express from "express";
import ProductManager from "../productManager.js";
const path = "../../products.json"
const  productManager = new ProductManager (path)


let usuarios = [
  { id: "100", name: "guille", edad: 40, img: "chuck.png" },
  { id: "101", name: "laura", edad: 20, img: "chuck.png" },
  { id: "102", name: "pepe", edad: 18, img: "chuck.png" },
  { id: "103", name: "David", edad: 35, img: "chuck.png" }
];

export const usersHtmlRouter = express.Router();
usersHtmlRouter.get("/", (req, res) => {
  return res.status(200).render("usuarios", { usuarios });
});

usersHtmlRouter.get("/products", async (req, res) => {
  console.log("llego")
  const products = await productManager.getProducts();
  return res.status(200).render("products", {products})
  console.log(products)
})
