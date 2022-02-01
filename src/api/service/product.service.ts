import Product from "../types/product.interface";
import ApiResponse from "../types/response.interface";
import express from "express";

const products: Product[] = [
    {
        imageUrl: '',
        name: 'Coca Cola 2.25lts',
        price: 218.59,
        brand: 'Coca-Cola',
        stock: 0
    }
  ];

class ProductService{
    constructor(){}

    public getProducts(response: express.Response) : Promise<Product[]>{
        return Promise.resolve(products);
    }

    public createProduct(request: express.Request, response: express.Response):Promise<Product[]>{
        const product: Product = request.body;
        products.push(product);
        return Promise.resolve(products);
    }
}

export default ProductService;