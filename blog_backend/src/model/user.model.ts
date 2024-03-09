import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({ required: true, default: 1 })
    user_id: number;

    @ApiProperty({ required: true, default: 'user_name' })
    user_name: string;

    @ApiProperty({ required: true, default: 'user_last_name' })
    user_last_name: string;

    @ApiProperty({ required: true, default: 'user_email@gmail.com'})
    user_email: string;

    @ApiProperty({ required: false, default: '(14)99991-99914'})
    user_telephone: string;

    @ApiProperty({ required: true, default: 'user_password' })
    user_password: string;

    @ApiProperty({ required: true, default: new Date() })
    createdAt?: Date;

    @ApiProperty({ required: true, default: new Date() })
    updatedAt?: Date;

    @ApiProperty({ required: false })
    deletedAt?: Date;
}

export class ICreateUser {
    @ApiProperty({ required: true, default: 'user_name' })
    user_name: string;

    @ApiProperty({ required: true, default: 'user_last_name' })
    user_last_name: string;

    @ApiProperty({ required: true, default: 'user_email@gmail.com'})
    user_email: string;

    @ApiProperty({ required: false, default: '(14)99991-99914'})
    user_telephone: string;

    @ApiProperty({ required: true, default: 'user_password' })
    user_password: string; 
}

export class IUpdateUser {
    @ApiProperty({ required: true, default: 1 })
    user_id: number;

    @ApiProperty({ required: true, default: 'user_name' })
    user_name: string;

    @ApiProperty({ required: true, default: 'user_last_name' })
    user_last_name: string;

    @ApiProperty({ required: true, default: 'user_email@gmail.com'})
    user_email: string;

    @ApiProperty({ required: false, default: '(14)99991-99914'})
    user_telephone: string;

    @ApiProperty({ required: true, default: 'user_password' })
    user_password: string;
}

export class ILogin {
    @ApiProperty({ required: true, default: 'user_email@gmail.com'})
    user_email: string;

    @ApiProperty({ required: true, default: 'user_password' })
    user_password: string;
}