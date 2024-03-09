const bcrypt = require('bcrypt');
require('dotenv').config();


export async function generateHash (password: string): Promise<string> {

    const hash = await bcrypt.hash(password, 10);

    return hash;
}

export async function compareHash (passwor, hasPassword): Promise<boolean> {
    return bcrypt.compare(passwor, hasPassword);
}