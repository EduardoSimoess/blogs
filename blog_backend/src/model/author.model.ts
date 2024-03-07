import { ApiProperty } from "@nestjs/swagger";

export class AuthorDto {
    @ApiProperty({ required: true, default: 1})
    author_id: number;

    @ApiProperty({ required: true, default: 'author_name' })
    author_name: string;

    @ApiProperty({ required: true, default: 'author_description' })
    author_description: string;

    @ApiProperty({ required: true, default: 'author_picture'})
    author_picture: string;

    @ApiProperty({ required: true, default: new Date() })
    createdAt?: Date;

    @ApiProperty({ required: true, default: new Date() })
    updatedAt?: Date;

    @ApiProperty({ required: false })
    deletedAt?: Date;
}

export class ICreateAuthor {
    @ApiProperty({ required: true, default: 'author_name' })
    author_name: string;

    @ApiProperty({ required: true, default: 'author_description' })
    author_description: string;

    @ApiProperty({ required: true, default: 'author_picture'})
    author_picture: string;    
}

export class IUpdateAuthor {
    @ApiProperty({ required: true, default: 1})
    author_id: number;

    @ApiProperty({ required: true, default: 'author_name' })
    author_name: string;

    @ApiProperty({ required: true, default: 'author_description' })
    author_description: string;

    @ApiProperty({ required: true, default: 'author_picture'})
    author_picture: string;    
}