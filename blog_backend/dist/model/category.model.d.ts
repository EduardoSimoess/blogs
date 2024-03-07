export declare class CategoryDto {
    category_id: number;
    category_name: string;
    category_description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export declare class ICreateCategory {
    category_name: string;
    category_description: string;
}
export declare class IUpdateCategory {
    category_id: number;
    category_name: string;
    category_description: string;
}
