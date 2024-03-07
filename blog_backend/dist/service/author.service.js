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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
let AuthorService = class AuthorService {
    constructor(Author) {
        this.Author = Author;
    }
    async select(id) {
        let response = { status: 400 };
        const select = await this.Author.findOne({ where: { author_id: id } });
        if (select) {
            response = {
                status: 200,
                data: select,
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
                        'Não foi encontrado nenhum autor com esse id'
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
        const selectAll = await this.Author.findAndCountAll({
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
    async create(params) {
        let response = { status: 400 };
        const created = await this.Author.create({ ...params });
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
    async delete(id) {
        let response = { status: 400 };
        const deleted = await this.Author.destroy({ where: { author_id: id } });
        if (deleted) {
            response = {
                status: 200,
                data: deleted,
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
                        'Houve um erro ao deletar o autor, tenta mais tarde'
                    ]
                }
            };
        }
        return response;
    }
    async update(param) {
        let response = { status: 400 };
        const { author_id, author_name, author_description, author_picture, } = param;
        const updated = await this.Author.update({
            updatedAt: (0, date_fns_1.subHours)(new Date(), 3),
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
        }
        else {
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
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTHOR_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], AuthorService);
//# sourceMappingURL=author.service.js.map