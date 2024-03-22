import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, PrismaService],
})
export class AppModule {}
