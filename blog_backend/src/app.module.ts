import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthorModule } from './module/author.module';
import { CategoryModule } from './module/category.module';
import { PostModule } from './module/post.module';

@Module({
  imports: [
    DatabaseModule,
    AuthorModule,
    CategoryModule,
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
