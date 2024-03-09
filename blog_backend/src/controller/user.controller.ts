import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { IObjectResponse } from "src/model/response.model";
import { ICreateUser, ILogin, IUpdateUser } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    @ApiCreatedResponse({
        status: 200,
        description: 'success'
    })
    async createUser(@Body() user: ICreateUser): Promise<IObjectResponse> {
        return this.userService.create(user);
    }

    @Post('login')
    @ApiCreatedResponse({
        status: 200,
        description: 'success'
    })
    async loginUser(@Body() user: ILogin): Promise<IObjectResponse> {
        return this.userService.login(user);
    }

    @Delete('delete/:user')
    @ApiCreatedResponse({
      status: 200,
      description: 'success',
    })
    async deleteUser(@Param('user') user: number): Promise<IObjectResponse> {
      return this.userService.delete(user);
    }

    @Put('update')
    @ApiCreatedResponse({
      status: 201,
      description: 'success',
    })
    async updateUser(@Body() post: IUpdateUser): Promise<IObjectResponse> {
      return this.userService.update({ ...post });
    }
}