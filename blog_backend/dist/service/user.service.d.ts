import { UserTable } from "src/entity/user.entity";
import { IObjectResponse } from "src/model/response.model";
import { ICreateUser, ILogin, IUpdateUser } from "src/model/user.model";
export declare class UserService {
    private readonly User;
    constructor(User: typeof UserTable);
    create(params: ICreateUser): Promise<IObjectResponse>;
    login(params: ILogin): Promise<IObjectResponse>;
    delete(params: number): Promise<IObjectResponse>;
    update(params: IUpdateUser): Promise<IObjectResponse>;
}
