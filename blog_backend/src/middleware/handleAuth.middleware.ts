import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
const jwt = require('jsonwebtoken');
require('dotenv').config();


@Injectable()
export class RolesGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();    
        const authHeader = request.headers['authorization'];
        const secret = process.env.SECRET;
        
        try {
            jwt.verify(authHeader, secret);
            return true;
        } catch (erro) {
            return false;
        }
    }
}