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
exports.PostTable = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_entity_1 = require("./category.entity");
const author_entity_1 = require("./author.entity");
let PostTable = class PostTable extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
exports.PostTable = PostTable;
__decorate([
    (0, sequelize_typescript_1.Column)({
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED
    }),
    __metadata("design:type", Number)
], PostTable.prototype, "post_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PostTable.prototype, "post_slug", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PostTable.prototype, "post_titel", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PostTable.prototype, "post_subtitle", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PostTable.prototype, "post_picture", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PostTable.prototype, "post_text", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], PostTable.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        defaultValue: sequelize_typescript_1.DataType.NOW,
    }),
    __metadata("design:type", Date)
], PostTable.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], PostTable.prototype, "deletedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => category_entity_1.CategoryTable),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PostTable.prototype, "category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => category_entity_1.CategoryTable, { foreignKey: 'category_id' }),
    __metadata("design:type", category_entity_1.CategoryTable)
], PostTable.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => author_entity_1.AuthorTable),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PostTable.prototype, "author_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => author_entity_1.AuthorTable, { foreignKey: 'author_id' }),
    __metadata("design:type", author_entity_1.AuthorTable)
], PostTable.prototype, "author", void 0);
exports.PostTable = PostTable = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'post', paranoid: true })
], PostTable);
//# sourceMappingURL=post.entity.js.map