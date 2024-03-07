import { Inject, Injectable } from "@nestjs/common";
import { AuthorTable } from "src/entity/author.entity";
import { ICreateAuthor, IUpdateAuthor } from "src/model/author.model";
import { IObjectResponse, IPagination } from "src/model/response.model";
import { subHours } from "date-fns";


@Injectable()
export class AuthorService {
    constructor (
        @Inject('AUTHOR_REPOSITORY') private readonly Author: typeof AuthorTable,
    ) {}

    async select(id: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 }

        const select = await this.Author.findOne({ where: { author_id: id }});

        if(select) {
            response = {
                status: 200,
                data: select,
                message: {
                    success: 'Sucesso'
                }
            }
        } else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Não foi encontrado nenhum autor com esse id'
                    ]
                }
           };
        }

        return response;
    }

    async selectAll(params: IPagination): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { limit, page } = params;
        const offset = Number(page) * Number(limit);

        const selectAll = await this.Author.findAndCountAll<AuthorTable>({
            limit: Number(limit),
            offset: offset,
            order: [['createdAt', 'DESC']],
        });

        if (selectAll) {
            response = {
                status: 200,
                data: selectAll,
                message: {
                    success: 'sucesso'
                }
            };
        }

        return response;
    }


    async create(params: ICreateAuthor): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };
        const created = await this.Author.create({ ...params });

        if (created) {
            response = {
                status: 200,
                data: created,
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
                        'Houve um erro ao criar o autor, tente mais tarde!'
                    ]
                }
            };
        }

        return response;
    }

    async delete(id: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const deleted = await this.Author.destroy({ where: { author_id: id } });

        if (deleted) {
            response = {
                status: 200,
                data: deleted,
                message: {
                    success: 'Sucesso'
                }
            }
        } else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Houve um erro ao deletar o autor, tenta mais tarde'
                    ]
                }
            }
        }

        return response;
    }

    async update(param: IUpdateAuthor): Promise<IObjectResponse>{
        let response: IObjectResponse = { status: 400 };

        const {
            author_id,
            author_name,
            author_description,
            author_picture,
        }: IUpdateAuthor = param;

        const updated = await this.Author.update({ 
            updatedAt: subHours(new Date(), 3),
            author_name,
            author_description,
            author_picture,
        }, { where: { author_id } });

        if (updated[0] === 1) {
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
                        'Ocorreu um erro ao atualizar o autor, tente mais tarde'
                    ]
                },
            };
        }

        return response;
    }
}

