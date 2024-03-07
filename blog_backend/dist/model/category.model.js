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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUpdateCategory = exports.ICreateCategory = exports.CategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CategoryDto {
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], CategoryDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_name' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_description' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "category_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], CategoryDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], CategoryDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CategoryDto.prototype, "deletedAt", void 0);
class ICreateCategory {
}
exports.ICreateCategory = ICreateCategory;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_name' }),
    __metadata("design:type", String)
], ICreateCategory.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_description' }),
    __metadata("design:type", String)
], ICreateCategory.prototype, "category_description", void 0);
class IUpdateCategory {
}
exports.IUpdateCategory = IUpdateCategory;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdateCategory.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_name' }),
    __metadata("design:type", String)
], IUpdateCategory.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'category_description' }),
    __metadata("design:type", String)
], IUpdateCategory.prototype, "category_description", void 0);
//# sourceMappingURL=category.model.js.map