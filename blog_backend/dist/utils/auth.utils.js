"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jwt = require('jsonwebtoken');
require('dotenv').config();
function createToken(email, lastName) {
    const secret = process.env.SECRET;
    const token = jwt.sign({ email, lastName }, secret, { expiresIn: '6h' });
    return token;
}
exports.createToken = createToken;
//# sourceMappingURL=auth.utils.js.map