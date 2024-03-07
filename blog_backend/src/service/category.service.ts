import { Inject, Injectable } from '@nestjs/common';
import { CategoryTable } from 'src/entity/category.entity';
import { ICreateCategory, IUpdateCategory } from 'src/model/category.model';
import { IObjectResponse } from 'src/model/response.model';
import { subHours } from "date-fns";


@Injectable()
export class CategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY') private readonly Category: typeof CategoryTable,
    ) {}

    async select(parm: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const select = await this.Category.findOne<CategoryTable>({
            where: { category_id: parm }
        });

        if (select) {
            response = {
                status: 200,
                data: select,
                message: {
                    success: 'Sucesso',
                }
            }
        } else {
           response = {
                status: 400,
                message: {
                    errors: [
                        'Não foi encontrado nenhuma categoria com esse id'
                    ]
                }
           };
        }

        return response;
    }

    async selectAll(): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const selectAll = await this.Category.findAndCountAll<CategoryTable>({
            order: [['createdAt', 'DESC']],
         });

        if (selectAll) {
            response = {
                status: 200,
                data: selectAll,
                message: {
                    success: 'Sucesso'
                },
            };
        }

        return response;
    }

    async create(params: ICreateCategory): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const created = await this.Category.create({ ...params });

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
                        'Houve um erro ao criar a categoria, tente mais tarde!'
                    ]
                }
            };
        }

        return response;
    }

    async update(params: IUpdateCategory): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { category_id, category_name, category_description }: IUpdateCategory = params;

        const updated = await this.Category.update(
            { category_name, category_description,  updatedAt: subHours(new Date(), 3) }, 
            { where: { category_id }});

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
                        'Ocorreu um erro ao atualizar a categoria, tente mais tarde'
                    ]
                },
            };
        }

        return response;
    }

    async delete(params: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };
        
        const deleted = await this.Category.destroy({
            where: { category_id: params },
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
                        'Ocorreu um erro ao deletar a categoria, tente mais tarde'
                    ]
                },
            }; 
        }

        return response;
    }
}