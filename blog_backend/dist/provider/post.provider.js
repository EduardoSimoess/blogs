"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProviders = void 0;
const post_entity_1 = require("../entity/post.entity");
exports.postProviders = [
    {
        provide: 'POST_REPOSITORY',
        useValue: post_entity_1.PostTable,
    },
];
//# sourceMappingURL=post.provider.js.map