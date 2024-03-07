import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ICreatePost, IUpdatePost } from 'src/model/post.model';
import { IObjectResponse, IPagination } from 'src/model/response.model';
import { PostService } from 'src/service/post.service';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('select/:post_id')
  @ApiCreatedResponse({
    status: 200,
    description: 'success',
    type: 'CreatePlan',
  })
  async selectPost(@Param('post_id') post_id: number): Promise<IObjectResponse> {
    return this.postService.select(post_id);
  }

  @Get('selectAll')
  @ApiCreatedResponse({
    status: 200,
    description: 'success',
    type: 'CreatePlan',
  })
  async selectAllPosts(@Query() params: IPagination): Promise<IObjectResponse> {
    return this.postService.selectAll(params);
  }

  @Post('create')
  @ApiCreatedResponse({
    status: 200,
    description: 'success',
    type: 'CreatePlan',
  })
  async createPost(@Body() post: ICreatePost): Promise<IObjectResponse> {
    return this.postService.create(post);
  }
  
  @Put('update')
  @ApiCreatedResponse({
    status: 201,
    description: 'success',
    type: 'CreatePlan',
  })
  async updatePost(@Body() post: IUpdatePost): Promise<IObjectResponse> {
    return this.postService.update({ ...post });
  }

  @Delete('delete/:post')
  @ApiCreatedResponse({
    status: 200,
    description: 'success',
    type: 'CreatePlan',
  })
  async deletePost(@Param('post') post: number): Promise<IObjectResponse> {
    return this.postService.delete(post);
  }
}

