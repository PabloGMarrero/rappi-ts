import { Express, Request, Response } from "express";
import ProductController from "./api/controller/product.controller";

const productController = new ProductController();

export default (app:Express) => {
    app.get("/", (req, res) => {
        return res.sendStatus(200);
    });

    app.get(productController.getPath(), (req, res) =>
        productController.getProducts(res)
    );
    app.post(productController.getPath(), (req, res) =>
        productController.createProduct(req, res)
    );

};