import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ICreateCategory, IUpdateCategory } from 'src/model/category.model';
import { IObjectResponse } from 'src/model/response.model';
import { CategoryService } from 'src/service/category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get('select/:category_id')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async selectCategory(@Param('category_id') category_id: number): Promise<IObjectResponse> {
        return this.categoryService.select(category_id);
    }

    @Get('selectAll')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async selectAllCategorys(): Promise<IObjectResponse> {
        return await this.categoryService.selectAll();
    }

    @Put('update')
    @ApiCreatedResponse({
        status: 201,
        description: 'success',
    })
    async updateCategory(@Body() category: IUpdateCategory): Promise<IObjectResponse> {
        return this.categoryService.update({ ...category });
    }

    @Post('create')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async createCategory(@Body() category: ICreateCategory): Promise<IObjectResponse> {
        return this.categoryService.create(category);
    }

    @Delete('delete/:category_id')
    @ApiCreatedResponse({
        status: 201,
        description: 'success',
    })
    async deleteCategory(@Param('category_id') category_id: number): Promise<IObjectResponse> {
        return this.categoryService.delete(category_id);
    }
}