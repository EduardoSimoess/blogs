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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
let CategoryService = class CategoryService {
    constructor(Category) {
        this.Category = Category;
    }
    async select(parm) {
        let response = { status: 400 };
        const select = await this.Category.findOne({
            where: { category_id: parm }
        });
        if (select) {
            response = {
                status: 200,
                data: select,
                message: {
                    success: 'Sucesso',
                }
            };
        }
        else {
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
    async selectAll() {
        let response = { status: 400 };
        const selectAll = await this.Category.findAndCountAll({
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
    async create(params) {
        let response = { status: 400 };
        const created = await this.Category.create({ ...params });
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
                        'Houve um erro ao criar a categoria, tente mais tarde!'
                    ]
                }
            };
        }
        return response;
    }
    async update(params) {
        let response = { status: 400 };
        const { category_id, category_name, category_description } = params;
        const updated = await this.Category.update({ category_name, category_description, updatedAt: (0, date_fns_1.subHours)(new Date(), 3) }, { where: { category_id } });
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
                        'Ocorreu um erro ao atualizar a categoria, tente mais tarde'
                    ]
                },
            };
        }
        return response;
    }
    async delete(params) {
        let response = { status: 400 };
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
        }
        else {
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
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CATEGORY_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map