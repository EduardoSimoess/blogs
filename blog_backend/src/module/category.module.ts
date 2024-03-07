import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CategoryController } from 'src/controller/category.controller';
import { CategoryService } from 'src/service/category.service';
import { categoryProviders } from 'src/provider/category.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [CategoryService, ...categoryProviders]
})
export class CategoryModule {}