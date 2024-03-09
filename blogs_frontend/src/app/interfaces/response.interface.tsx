export interface IObjectResponse {
    status: number;
    message?: {
      errors?: string[];
      success?: string;
    };
    data?: any;
  }