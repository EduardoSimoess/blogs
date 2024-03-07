import { ApiProperty } from '@nestjs/swagger';

export interface IObjectResponse {
    status: number;
    message?: {
      errors?: string[];
      success?: string;
    };
    data?: any;
  }

export class IPagination {
    @ApiProperty({ required: false, default: 1 })
    limit:number;
    @ApiProperty({ required: false, default: 0 })
    page:number;
  }
  