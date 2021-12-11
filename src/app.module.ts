import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { AuthModule } from "./core/auth/auth.module";

@Module({
  imports: [
    ProductsModule,
    AuthModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://rdvNestRestApi:${process.env.DATABASE_PASSWORD}@cluster0.7p4j8.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
    ),
  ],
})
export class AppModule {}
