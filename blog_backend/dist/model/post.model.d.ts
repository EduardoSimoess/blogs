export declare class PostDto {
    post_id: number;
    post_slug: string;
    post_titel: string;
    post_subtitle: string;
    post_picture: string;
    post_text: string;
    author_id: number;
    category_id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export declare class ICreatePost {
    post_slug: string;
    post_titel: string;
    post_subtitle: string;
    post_picture: string;
    post_text: string;
    author_id: number;
    category_id: number;
}
export declare class IUpdatePost {
    post_id: number;
    post_slug: string;
    post_titel: string;
    post_subtitle: string;
    post_picture: string;
    post_text: string;
    author_id: number;
    category_id: number;
}
