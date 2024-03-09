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
exports.ILogin = exports.IUpdateUser = exports.ICreateUser = exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], UserDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_name' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_last_name' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_email@gmail.com' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '(14)99991-99914' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_password' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], UserDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    __metadata("design:type", Date)
], UserDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UserDto.prototype, "deletedAt", void 0);
class ICreateUser {
}
exports.ICreateUser = ICreateUser;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_name' }),
    __metadata("design:type", String)
], ICreateUser.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_last_name' }),
    __metadata("design:type", String)
], ICreateUser.prototype, "user_last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_email@gmail.com' }),
    __metadata("design:type", String)
], ICreateUser.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '(14)99991-99914' }),
    __metadata("design:type", String)
], ICreateUser.prototype, "user_telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_password' }),
    __metadata("design:type", String)
], ICreateUser.prototype, "user_password", void 0);
class IUpdateUser {
}
exports.IUpdateUser = IUpdateUser;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], IUpdateUser.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_name' }),
    __metadata("design:type", String)
], IUpdateUser.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_last_name' }),
    __metadata("design:type", String)
], IUpdateUser.prototype, "user_last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_email@gmail.com' }),
    __metadata("design:type", String)
], IUpdateUser.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '(14)99991-99914' }),
    __metadata("design:type", String)
], IUpdateUser.prototype, "user_telephone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_password' }),
    __metadata("design:type", String)
], IUpdateUser.prototype, "user_password", void 0);
class ILogin {
}
exports.ILogin = ILogin;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_email@gmail.com' }),
    __metadata("design:type", String)
], ILogin.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'user_password' }),
    __metadata("design:type", String)
], ILogin.prototype, "user_password", void 0);
//# sourceMappingURL=user.model.js.map