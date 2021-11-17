import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadService } from 'src/upload/upload.service';
import { CatagoryEntity, ProductEntity } from '../entities';
import { ProductService } from '../product/product.service';

import { CatagoryController } from './catagory.controller';
import { CatagoryService } from './catagory.service';

@Module({
  imports: [TypeOrmModule.forFeature([CatagoryEntity, ProductEntity])],
  controllers: [CatagoryController],
  providers: [CatagoryService, ProductService, UploadService],
  exports: [CatagoryService],
})
export class CatagoryModule {}