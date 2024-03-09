import { IObjectResponse } from "src/model/response.model";
import { ICreateUser, ILogin, IUpdateUser } from "src/model/user.model";
import { UserService } from "src/service/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: ICreateUser): Promise<IObjectResponse>;
    loginUser(user: ILogin): Promise<IObjectResponse>;
    deleteUser(user: number): Promise<IObjectResponse>;
    updateUser(post: IUpdateUser): Promise<IObjectResponse>;
}
