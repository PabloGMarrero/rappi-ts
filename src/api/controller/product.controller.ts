import express, {Router} from "express";
import ProductService from "../service/product.service";

class ProductController{
    private router:Router = express.Router();
    private path:string = "/product";
    private service:ProductService = new ProductService();

    constructor(){
    }
    
    getProducts = async (response: express.Response) => {
        const products = await this.service.getProducts()
        return response.send(products).status(200);
    }
     
    createProduct = async (request: express.Request, response: express.Response) => {
        const products = await this.service.createProduct(request);
        return response.send(products).status(200);
    }

    public getRouter():Router{
        this.router.get(this.path, (req, res) =>
            this.getProducts(res)
        );
        this.router.post(this.path, (req, res) =>
            this.createProduct(req, res)
        );

        return this.router;
    }
}

export default ProductController;