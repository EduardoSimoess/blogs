"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryProviders = void 0;
const category_entity_1 = require("../entity/category.entity");
exports.categoryProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useValue: category_entity_1.CategoryTable,
    },
];
//# sourceMappingURL=category.provider.js.map