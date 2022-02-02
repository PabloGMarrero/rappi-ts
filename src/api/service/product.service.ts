import express from "express";
import Product from "../types/product.interface";
import ProductModel from "../model/product.model";

class ProductService{
    constructor(){}

    public async getProducts() : Promise<Product[]>{
        return ProductModel.find({});
    }

    public async createProduct(request: express.Request):Promise<Product>{
        const {imageUrl, name, price, brand, stock} = request.body;
        const product = ProductModel.build(
            {
                imageUrl, 
                name, 
                price, 
                brand, 
                stock
            }
        )
        return product.save();
    }
}

export default ProductService;