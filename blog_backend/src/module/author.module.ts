import { Module } from '@nestjs/common';
import { AuthorController } from 'src/controller/author.controller';
import { DatabaseModule } from 'src/database/database.module';
import { authorProviders } from 'src/provider/author.provider';
import { AuthorService } from 'src/service/author.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthorController],
    providers: [AuthorService, ...authorProviders]
})
export class AuthorModule {}