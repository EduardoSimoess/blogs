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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const auth_utils_1 = require("../utils/auth.utils");
const hash_utils_1 = require("../utils/hash.utils");
const date_fns_1 = require("date-fns");
let UserService = class UserService {
    constructor(User) {
        this.User = User;
    }
    async create(params) {
        let response = { status: 400 };
        const { user_email, user_last_name, user_name, user_password, user_telephone } = params;
        const password = await (0, hash_utils_1.generateHash)(user_password);
        let created;
        if (password) {
            created = await this.User.create({
                user_email, user_last_name, user_name, user_telephone, user_password: password
            });
        }
        const token = (0, auth_utils_1.createToken)(user_email, user_last_name);
        if (created) {
            response = {
                status: 200,
                data: { token },
                message: {
                    success: 'Sucesso'
                }
            };
        }
        else {
            response = {
                status: 400,
                data: created,
                message: {
                    errors: [
                        'Houve um erro ao criar o usuário, tente mais tarde!'
                    ]
                }
            };
        }
        return response;
    }
    async login(params) {
        let response = { status: 400 };
        const { user_email, user_password } = params;
        let bool = false;
        const user = await this.User.findOne({ where: { user_email } });
        if (user) {
            const hashPasswor = user.user_password;
            bool = await (0, hash_utils_1.compareHash)(user_password, hashPasswor);
            if (bool) {
                const token = (0, auth_utils_1.createToken)(user_email, user.user_last_name);
                response = {
                    status: 200,
                    data: { token },
                    message: {
                        success: 'Sucesso'
                    }
                };
            }
        }
        if (!user || !bool) {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Usuário ou senha incorreto'
                    ]
                }
            };
        }
        return response;
    }
    async delete(params) {
        let response = { status: 400 };
        const deleted = await this.User.destroy({
            where: { user_id: params },
        });
        if (deleted) {
            response = {
                status: 200,
                data: deleted,
                message: {
                    success: 'Sucesso'
                },
            };
        }
        else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Ocorreu um erro ao deletar o usuário, tente mais tarde'
                    ]
                },
            };
        }
        return response;
    }
    async update(params) {
        let response = { status: 400 };
        const { user_id, user_email, user_last_name, user_name, user_password, user_telephone } = params;
        const updated = await this.User.update({ user_email,
            user_last_name,
            user_name,
            user_password,
            user_telephone,
            updatedAt: (0, date_fns_1.subHours)(new Date(), 3) }, { where: { user_id } });
        if (updated.length) {
            response = {
                status: 200,
                data: updated,
                message: {
                    success: 'Sucesso'
                },
            };
        }
        else {
            response = {
                status: 400,
                message: {
                    errors: [
                        'Ocorreu um erro ao atualizar o post, tente mais tarde'
                    ]
                },
            };
        }
        return response;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map