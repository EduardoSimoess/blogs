export declare class UserDto {
    user_id: number;
    user_name: string;
    user_last_name: string;
    user_email: string;
    user_telephone: string;
    user_password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export declare class ICreateUser {
    user_name: string;
    user_last_name: string;
    user_email: string;
    user_telephone: string;
    user_password: string;
}
export declare class IUpdateUser {
    user_id: number;
    user_name: string;
    user_last_name: string;
    user_email: string;
    user_telephone: string;
    user_password: string;
}
export declare class ILogin {
    user_email: string;
    user_password: string;
}
