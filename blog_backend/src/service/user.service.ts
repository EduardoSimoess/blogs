import { Inject, Injectable } from "@nestjs/common";
import { UserTable } from "src/entity/user.entity";
import { IObjectResponse } from "src/model/response.model";
import { ICreateUser, ILogin, IUpdateUser } from "src/model/user.model";
import { createToken } from "src/utils/auth.utils";
import { compareHash, generateHash } from "src/utils/hash.utils";
import { subHours } from "date-fns";


@Injectable()
export class UserService {
    constructor (
        @Inject('USER_REPOSITORY') private readonly User: typeof UserTable,
    ) {}

    async create(params: ICreateUser): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { user_email, user_last_name, user_name, user_password, user_telephone } = params;

        const password = await generateHash(user_password);

        let created;

        if(password) {
            created = await this.User.create({ 
                user_email, user_last_name, user_name, user_telephone, user_password: password 
            });
        }

        const token = createToken(user_email, user_last_name);

        if (created) {
            response = {
                status: 200,
                data: { token },
                message: {
                    success: 'Sucesso'
                }
            }
        } else {
            response = {
                status: 400,
                data: created,
                message: {
                    errors: [
                        'Houve um erro ao criar o usuário, tente mais tarde!'
                    ]
                }
            };
        }
        return response;
    }

    async login(params: ILogin): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { user_email, user_password } = params;
        let bool = false;
        const user = await this.User.findOne({ where: { user_email }});

        if(user) {
            const hashPasswor = user.user_password;

            bool = await compareHash(user_password, hashPasswor);

            if(bool) {
                const token = createToken(user_email, user.user_last_name);

                response = {
                    status: 200,
                    data: { token },
                    message: {
                        success: 'Sucesso'
                    }
                }                
            }
        }

        if(!user || !bool) {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Usuário ou senha incorreto'
                    ]
                }
            };  
        }
        return response;
    }

    async delete(params: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };
        
        const deleted = await this.User.destroy({
            where: { user_id: params },
        });

        if (deleted) {
            response = {
                status: 200,
                data: deleted,
                message: {
                    success: 'Sucesso'
                },
            };
        } else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Ocorreu um erro ao deletar o usuário, tente mais tarde'
                    ]
                },
            }; 
        }

        return response;
    }

    async update(params: IUpdateUser): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { user_id,
                user_email,
                user_last_name,
                user_name,
                user_password,
                user_telephone
         }: IUpdateUser = params;

        const updated = await this.User.update(
            {                   user_email,
                user_last_name,
                user_name,
                user_password,
                user_telephone,
                updatedAt: subHours(new Date(), 3) }, 
            { where: { user_id }});

        if (updated.length) {
            response = {
                status: 200,
                data: updated,
                message: {
                    success: 'Sucesso'
                },
            };
        } else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Ocorreu um erro ao atualizar o post, tente mais tarde'
                    ]
                },
            };
        }

        return response;
    }
}