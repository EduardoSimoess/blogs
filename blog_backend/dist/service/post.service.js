"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const author_entity_1 = require("../entity/author.entity");
const category_entity_1 = require("../entity/category.entity");
const date_fns_1 = require("date-fns");
let PostService = class PostService {
    constructor(Post) {
        this.Post = Post;
    }
    async select(param) {
        let response = { status: 400 };
        const select = await this.Post.findOne({
            where: { post_id: param },
            include: [{ model: category_entity_1.CategoryTable }, { model: author_entity_1.AuthorTable }]
        });
        if (select) {
            response = {
                status: 200,
                data: select,
                message: {
                    success: 'sucesso',
                },
            };
        }
        else {
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
    async selectAll(params) {
        let response = { status: 400 };
        const { limit, page } = params;
        const offset = Number(page) * Number(limit);
        const selectAll = await this.Post.findAndCountAll({
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
    async create(params) {
        let response = { status: 400 };
        const created = await this.Post.create({ ...params });
        if (created) {
            response = {
                status: 200,
                data: created,
                message: {
                    success: 'Sucesso'
                }
            };
        }
        else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Houve um erro ao criar o post, tente mais tarde!'
                    ]
                }
            };
        }
        return response;
    }
    async update(params) {
        let response = { status: 400 };
        const { post_id, post_picture, post_slug, post_subtitle, post_text, post_titel, author_id, category_id } = params;
        const updated = await this.Post.update({ post_picture,
            post_slug,
            post_subtitle,
            post_text,
            post_titel,
            author_id,
            category_id,
            updatedAt: (0, date_fns_1.subHours)(new Date(), 3) }, { where: { post_id } });
        if (updated.length) {
            response = {
                status: 200,
                data: updated,
                message: {
                    success: 'Sucesso'
                },
            };
        }
        else {
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
    async delete(params) {
        let response = { status: 400 };
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
        }
        else {
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
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('POST_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], PostService);
//# sourceMappingURL=post.service.js.map