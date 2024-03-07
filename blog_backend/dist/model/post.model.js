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
exports.IUpdatePost = exports.ICreatePost = exports.PostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PostDto {
}
exports.PostDto = PostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], PostDto.prototype, "post_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_slug' }),
    __metadata("design:type", String)
], PostDto.prototype, "post_slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_titel' }),
    __metadata("design:type", String)
], PostDto.prototype, "post_titel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_subtitle' }),
    __metadata("design:type", String)
], PostDto.prototype, "post_subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_picture' }),
    __metadata("design:type", String)
], PostDto.prototype, "post_picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_text' }),
    __metadata("design:type", String)
], PostDto.prototype, "post_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], PostDto.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], PostDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], PostDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], PostDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], PostDto.prototype, "deletedAt", void 0);
class ICreatePost {
}
exports.ICreatePost = ICreatePost;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_slug' }),
    __metadata("design:type", String)
], ICreatePost.prototype, "post_slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_titel' }),
    __metadata("design:type", String)
], ICreatePost.prototype, "post_titel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_subtitle' }),
    __metadata("design:type", String)
], ICreatePost.prototype, "post_subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_picture' }),
    __metadata("design:type", String)
], ICreatePost.prototype, "post_picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_text' }),
    __metadata("design:type", String)
], ICreatePost.prototype, "post_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], ICreatePost.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], ICreatePost.prototype, "category_id", void 0);
class IUpdatePost {
}
exports.IUpdatePost = IUpdatePost;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdatePost.prototype, "post_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_slug' }),
    __metadata("design:type", String)
], IUpdatePost.prototype, "post_slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_titel' }),
    __metadata("design:type", String)
], IUpdatePost.prototype, "post_titel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'post_subtitle' }),
    __metadata("design:type", String)
], IUpdatePost.prototype, "post_subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_picture' }),
    __metadata("design:type", String)
], IUpdatePost.prototype, "post_picture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 'post_text' }),
    __metadata("design:type", String)
], IUpdatePost.prototype, "post_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdatePost.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdatePost.prototype, "category_id", void 0);
//# sourceMappingURL=post.model.js.map