export interface IObjectResponse {
    status: number;
    message?: {
        errors?: string[];
        success?: string;
    };
    data?: any;
}
export declare class IPagination {
    limit: number;
    page: number;
}
