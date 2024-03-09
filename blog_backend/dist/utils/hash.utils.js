"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.generateHash = void 0;
const bcrypt = require('bcrypt');
require('dotenv').config();
async function generateHash(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
exports.generateHash = generateHash;
async function compareHash(passwor, hasPassword) {
    return bcrypt.compare(passwor, hasPassword);
}
exports.compareHash = compareHash;
//# sourceMappingURL=hash.utils.js.map