import { CreateProductDto } from "./dto/create-product.dto";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./schemas/product.schema";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    logger: Logger;
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>
    ) {
        this.logger = new Logger();
    }

    async getAll(): Promise<Product[]> {
        this.logger.log('GetAllProducts');
        return this.productModel.find().exec();
    }

    async getById(id: string): Promise<Product> {
        this.logger.log('Get product by id');
        return this.productModel.findById(id);
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        this.logger.log('New Product created');
        const newProduct = new this.productModel(productDto);
        return newProduct.save();
    }

    async remove(id: string): Promise<Product> {
        this.logger.log(`Product with id ${id} removed`);
        return this.productModel.findByIdAndRemove(id);
    }

    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        this.logger.log(`Product with id ${id} modified`);
        return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
    }
}
