"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const post_controller_1 = require("../controller/post.controller");
const database_module_1 = require("../database/database.module");
const author_provider_1 = require("../provider/author.provider");
const category_provider_1 = require("../provider/category.provider");
const post_provider_1 = require("../provider/post.provider");
const post_service_1 = require("../service/post.service");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [post_controller_1.PostController],
        providers: [post_service_1.PostService, ...author_provider_1.authorProviders, ...category_provider_1.categoryProviders, ...post_provider_1.postProviders]
    })
], PostModule);
//# sourceMappingURL=post.module.js.map