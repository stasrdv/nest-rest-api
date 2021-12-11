import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose/dist";
import { AuthModule } from "src/core/auth/auth.module";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { Product, ProductSchema } from "./schemas/product.schema";


@Module({
    imports: [AuthModule,
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers: [ProductsController],
    providers: [ProductService],
})

export class ProductsModule {

}