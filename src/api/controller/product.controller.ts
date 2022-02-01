import express, {Router} from "express";
import ProductService from "../service/product.service";

class ProductController{
    private router:Router = express.Router();
    private path:string = "/product";
    private service:ProductService = new ProductService();

    constructor(){
    }
    
    getProducts = async (response: express.Response) => {
        const products = await this.service.getProducts(response)
        return response.send(products).status(200);
    }
     
    createProduct = async (request: express.Request, response: express.Response) => {
        const products = await this.service.createProduct(request, response);
        return response.send(products).status(200);
    }

    public getPath():string {
        return this.path;
    }
}

export default ProductController;