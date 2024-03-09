import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Query,
    UseGuards
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { RolesGuard } from 'src/middleware/handleAuth.middleware';
import { ICreateAuthor, IUpdateAuthor } from 'src/model/author.model';
import { IObjectResponse, IPagination } from 'src/model/response.model';
import { AuthorService } from 'src/service/author.service';

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get('select/:author_id')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async selectAuthor(@Param('author_id') author_id: number): Promise<IObjectResponse> {
        return this.authorService.select(author_id);
    }

    @Get('select')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async selectAllAuthors(@Query() params: IPagination): Promise<IObjectResponse> {
        return this.authorService.selectAll(params);
    }

    @Delete('delete/:author_id')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async deleteAuthor(@Param('author_id') author_id: number): Promise<IObjectResponse> {
        return this.authorService.delete(author_id);
    }
    
    @Put('update')
    @ApiCreatedResponse({
        status: 201,
        description: 'success',
    })
    async updateAuthor(@Body() author: IUpdateAuthor): Promise<IObjectResponse> {
        return this.authorService.update({ ...author });
    }

    @Post('create')
    @ApiCreatedResponse({
        status: 200,
        description: 'success',
    })
    async createAuthor(@Body() author: ICreateAuthor): Promise<IObjectResponse> {
        return this.authorService.create(author);
    }
}