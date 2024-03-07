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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const author_model_1 = require("../model/author.model");
const response_model_1 = require("../model/response.model");
const author_service_1 = require("../service/author.service");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async selectAuthor(author_id) {
        return this.authorService.select(author_id);
    }
    async selectAllAuthors(params) {
        return this.authorService.selectAll(params);
    }
    async deleteAuthor(author_id) {
        return this.authorService.delete(author_id);
    }
    async updateAuthor(author) {
        return this.authorService.update({ ...author });
    }
    async createAuthor(author) {
        return this.authorService.create(author);
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, common_1.Get)('select/:author_id'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Param)('author_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "selectAuthor", null);
__decorate([
    (0, common_1.Get)('select'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_model_1.IPagination]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "selectAllAuthors", null);
__decorate([
    (0, common_1.Delete)('delete/:author_id'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Param)('author_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Put)('update'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 201,
        description: 'success',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_model_1.IUpdateAuthor]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_model_1.ICreateAuthor]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
exports.AuthorController = AuthorController = __decorate([
    (0, swagger_1.ApiTags)('author'),
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map