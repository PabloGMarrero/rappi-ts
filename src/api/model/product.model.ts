import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
    imageUrl: string,
    name: string,
    price: number,
    brand: string,
    stock: number
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

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;