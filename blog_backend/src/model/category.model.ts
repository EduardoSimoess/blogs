import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto {
    @ApiProperty({ required: true, default: 1 })
    category_id: number;

    @ApiProperty({ required: true, default: 'category_name' })
    category_name: string;

    @ApiProperty({ required: true, default: 'category_description' })
    category_description: string;

    @ApiProperty({ required: true, default: new Date() })
    createdAt?: Date;

    @ApiProperty({ required: true, default: new Date() })
    updatedAt?: Date;

    @ApiProperty({ required: false })
    deletedAt?: Date;
}

export class ICreateCategory {
    @ApiProperty({ required: true, default: 'category_name' })
    category_name: string;

    @ApiProperty({ required: true, default: 'category_description' })
    category_description: string; 
}

export class IUpdateCategory {
    @ApiProperty({ required: true, default: 1 })
    category_id: number;

    @ApiProperty({ required: true, default: 'category_name' })
    category_name: string;

    @ApiProperty({ required: true, default: 'category_description' })
    category_description: string;
}