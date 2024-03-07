import { Module } from '@nestjs/common';
import { PostController } from 'src/controller/post.controller';
import { DatabaseModule } from 'src/database/database.module';
import { authorProviders } from 'src/provider/author.provider';
import { categoryProviders } from 'src/provider/category.provider';
import { postProviders } from 'src/provider/post.provider';
import { PostService } from 'src/service/post.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostController],
    providers: [PostService, ...authorProviders, ...categoryProviders, ...postProviders]
})
export class PostModule {}