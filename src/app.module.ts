import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';



@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot('mongodb+srv://rdvNestRestApi:Q$U.$xGD6a4w$UN@cluster0.7p4j8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
