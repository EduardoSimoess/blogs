import { ApiProperty } from "@nestjs/swagger";

export class PostDto {
    @ApiProperty({ required: true, default: 1 })
    post_id: number;

    @ApiProperty({ required: true, default: 'post_slug' })
    post_slug: string;

    @ApiProperty({ required: true, default: 'post_titel' })
    post_titel: string;

    @ApiProperty({ required: true, default: 'post_subtitle' })
    post_subtitle: string;

    @ApiProperty({ required: false, default: 'post_picture'})
    post_picture: string;

    @ApiProperty({ required: false, default: 'post_text'})
    post_text: string;

    @ApiProperty({ required: true, default: 1})
    author_id: number;

    @ApiProperty({ required: true, default: 1})
    category_id: number;

    @ApiProperty({ required: true, default: new Date() })
    createdAt?: Date;

    @ApiProperty({ required: true, default: new Date() })
    updatedAt?: Date;

    @ApiProperty({ required: false })
    deletedAt?: Date;
}

export class ICreatePost {
    @ApiProperty({ required: true, default: 'post_slug' })
    post_slug: string;

    @ApiProperty({ required: true, default: 'post_titel' })
    post_titel: string;

    @ApiProperty({ required: true, default: 'post_subtitle' })
    post_subtitle: string;

    @ApiProperty({ required: false, default: 'post_picture'})
    post_picture: string;

    @ApiProperty({ required: false, default: 'post_text'})
    post_text: string;

    @ApiProperty({ required: true, default: 1})
    author_id: number;

    @ApiProperty({ required: true, default: 1})
    category_id: number;
}

export class IUpdatePost {
    @ApiProperty({ required: true, default: 1 })
    post_id: number;

    @ApiProperty({ required: true, default: 'post_slug' })
    post_slug: string;

    @ApiProperty({ required: true, default: 'post_titel' })
    post_titel: string;

    @ApiProperty({ required: true, default: 'post_subtitle' })
    post_subtitle: string;

    @ApiProperty({ required: false, default: 'post_picture'})
    post_picture: string;

    @ApiProperty({ required: false, default: 'post_text'})
    post_text: string;

    @ApiProperty({ required: true, default: 1})
    author_id: number;

    @ApiProperty({ required: true, default: 1})
    category_id: number;
}