import express, {Router} from "express";
import Product from "../types/product.interface";

const products: Product[] = [
    {
        imageUrl: '',
        name: 'Coca Cola 2.25lts',
        price: 218.59,
        brand: 'Coca-Cola',
        stock: 0
    }
  ];

class ProductController{
    private router:Router = express.Router();
    private path:string = "/product";

    constructor(){
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getProducts);
        this.router.post(this.path, this.createProduct);
    }

    getProducts = (request: express.Request, response: express.Response) => {
        response.send(products);
    }
     
    createProduct = (request: express.Request, response: express.Response) => {
        const product: Product = request.body;
        products.push(product);
        response.send(products);
    }

    public getRouter():Router {
        return this.router;
    }

    public getPath():string{
        return this.path;
    }
}

export default ProductController;