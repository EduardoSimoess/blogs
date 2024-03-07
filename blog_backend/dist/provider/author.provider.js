"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorProviders = void 0;
const author_entity_1 = require("../entity/author.entity");
exports.authorProviders = [
    {
        provide: 'AUTHOR_REPOSITORY',
        useValue: author_entity_1.AuthorTable,
    },
];
//# sourceMappingURL=author.provider.js.map