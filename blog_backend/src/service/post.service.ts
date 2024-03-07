import { Inject, Injectable } from "@nestjs/common";
import { AuthorTable } from "src/entity/author.entity";
import { CategoryTable } from "src/entity/category.entity";
import { PostTable } from "src/entity/post.entity";
import { ICreatePost, IUpdatePost } from "src/model/post.model";
import { IObjectResponse, IPagination } from "src/model/response.model";
import { subHours } from "date-fns";


@Injectable()
export class PostService {
    constructor(
    @Inject('POST_REPOSITORY') private readonly Post: typeof PostTable
    ) {}

    async select(param: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };
        const select = await this.Post.findOne<PostTable>({
          where: { post_id: param },
          include: [{ model: CategoryTable }, { model: AuthorTable }]
        });
        
        if (select) {
          response = {
            status: 200,
            data: select,
            message: {
              success: 'sucesso',
            },
          };
        } else {
          response = {
            status: 400,
            message: {
                errors: [
                    'Não foi encontrado nenhuma notícia com esse id'
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
        
        const selectAll = await this.Post.findAndCountAll<PostTable>({ 
          limit: Number(limit),
          offset: offset,
          order: [['createdAt', 'DESC']],
        });
        
        if (selectAll) {
          response = {
            status: 200,
            data: selectAll,
            message: {
              success: 'sucesso',
            },
          };
        }
    
        return response;
      }

      async create(params: ICreatePost): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const created = await this.Post.create({ ...params });

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
                        'Houve um erro ao criar o post, tente mais tarde!'
                    ]
                }
            };
        }

        return response;
    }

    async update(params: IUpdatePost): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };

        const { post_id, 
            post_picture, 
            post_slug, 
            post_subtitle, 
            post_text, 
            post_titel, 
            author_id, 
            category_id }: IUpdatePost = params;

        const updated = await this.Post.update(
            {   post_picture, 
                post_slug, 
                post_subtitle, 
                post_text, 
                post_titel, 
                author_id, 
                category_id,  
                updatedAt: subHours(new Date(), 3) }, 
            { where: { post_id }});

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

    async delete(params: number): Promise<IObjectResponse> {
        let response: IObjectResponse = { status: 400 };
        
        const deleted = await this.Post.destroy({
            where: { post_id: params },
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
                        'Ocorreu um erro ao deletar o post, tente mais tarde'
                    ]
                },
            }; 
        }

        return response;
    }
}