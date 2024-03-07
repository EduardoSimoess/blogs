export declare class AuthorDto {
    author_id: number;
    author_name: string;
    author_description: string;
    author_picture: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export declare class ICreateAuthor {
    author_name: string;
    author_description: string;
    author_picture: string;
}
export declare class IUpdateAuthor {
    author_id: number;
    author_name: string;
    author_description: string;
    author_picture: string;
}
