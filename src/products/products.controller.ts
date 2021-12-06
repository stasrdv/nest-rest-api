import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./products.service";
import { Product } from "./schemas/product.schema";

@Controller("products")
export class ProductsController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.getAll();
    }

    @Get(":id")
    getById(@Param("id") productId): Promise<Product> {
        return this.productService.getById(productId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }

    @Delete(":id")
    removeProduct(@Param("id") id: string): Promise<Product> {
        return this.productService.remove(id);
    }

    @Put(":id")
    updateProduct(
        @Body() updateProductDto: UpdateProductDto,
        @Param("id") id: string
    ): Promise<Product> {
        return this.productService.update(id, updateProductDto);
    }
}
