import mongoose from 'mongoose';
import Product from '../types/product.interface';

interface ProductDocument extends mongoose.Document {
    imageUrl: string,
    name: string,
    price: number,
    brand: string,
    stock: number
}

interface ProductModelInterface extends mongoose.Model<ProductDocument> {
    build(attrs: Product): ProductDocument;
}

const productSchema = new mongoose.Schema(
    {
        imageUrl: {type: String, required: false, unique:false },
        name: {type: String, required: true, unique:false },
        price: {type: Number, required: true, unique:false },
        brand: {type: String, required: true, unique:false },
        stock: {type: Number, required: true, unique:false }
    },{timestamps: true}
)

productSchema.statics.build = (prod:Product) =>{
    return new Product(prod);
}

const Product = mongoose.model<ProductDocument, ProductModelInterface>("Product", productSchema);

export default Product;