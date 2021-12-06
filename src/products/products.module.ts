import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose/dist";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { Product, ProductSchema } from "./schemas/product.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers: [ProductsController],
    providers: [ProductService],
})

export class ProductsModule {

}