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
exports.IUpdateAuthor = exports.ICreateAuthor = exports.AuthorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthorDto {
}
exports.AuthorDto = AuthorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], AuthorDto.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_name' }),
    __metadata("design:type", String)
], AuthorDto.prototype, "author_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_description' }),
    __metadata("design:type", String)
], AuthorDto.prototype, "author_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_picture' }),
    __metadata("design:type", String)
], AuthorDto.prototype, "author_picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], AuthorDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], AuthorDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AuthorDto.prototype, "deletedAt", void 0);
class ICreateAuthor {
}
exports.ICreateAuthor = ICreateAuthor;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_name' }),
    __metadata("design:type", String)
], ICreateAuthor.prototype, "author_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_description' }),
    __metadata("design:type", String)
], ICreateAuthor.prototype, "author_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_picture' }),
    __metadata("design:type", String)
], ICreateAuthor.prototype, "author_picture", void 0);
class IUpdateAuthor {
}
exports.IUpdateAuthor = IUpdateAuthor;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdateAuthor.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_name' }),
    __metadata("design:type", String)
], IUpdateAuthor.prototype, "author_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_description' }),
    __metadata("design:type", String)
], IUpdateAuthor.prototype, "author_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'author_picture' }),
    __metadata("design:type", String)
], IUpdateAuthor.prototype, "author_picture", void 0);
//# sourceMappingURL=author.model.js.map