import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { UserController } from "src/controller/user.controller";
import { userProviders } from "src/provider/user.provider";
import { UserService } from "src/service/user.service";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders]
})
export class UserModule {}