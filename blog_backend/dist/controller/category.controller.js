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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_model_1 = require("../model/category.model");
const category_service_1 = require("../service/category.service");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async selectCategory(category_id) {
        return this.categoryService.select(category_id);
    }
    async selectAllCategorys() {
        return await this.categoryService.selectAll();
    }
    async updateCategory(category) {
        return this.categoryService.update({ ...category });
    }
    async createCategory(category) {
        return this.categoryService.create(category);
    }
    async deleteCategory(category_id) {
        return this.categoryService.delete(category_id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)('select/:category_id'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "selectCategory", null);
__decorate([
    (0, common_1.Get)('selectAll'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "selectAllCategorys", null);
__decorate([
    (0, common_1.Put)('update'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 201,
        description: 'success',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.IUpdateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'success',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_model_1.ICreateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Delete)('delete/:category_id'),
    (0, swagger_1.ApiCreatedResponse)({
        status: 201,
        description: 'success',
    }),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('category'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map