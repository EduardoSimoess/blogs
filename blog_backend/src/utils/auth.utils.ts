const jwt = require('jsonwebtoken');
require('dotenv').config();

export function createToken (email: string, lastName: string): string {
    const secret = process.env.SECRET;

    const token = jwt.sign({ email, lastName }, secret, { expiresIn: '6h' });

    return token;
}