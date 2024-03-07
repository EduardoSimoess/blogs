"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const author_entity_1 = require("../entity/author.entity");
const category_entity_1 = require("../entity/category.entity");
const post_entity_1 = require("../entity/post.entity");
require('dotenv').config();
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: process.env.HOST,
                username: process.env.DATABASE_USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                define: {
                    timestamps: true,
                },
            });
            sequelize.addModels([
                author_entity_1.AuthorTable,
                category_entity_1.CategoryTable,
                post_entity_1.PostTable
            ]);
            return sequelize;
        }
    }
];
//# sourceMappingURL=database.provider.js.map