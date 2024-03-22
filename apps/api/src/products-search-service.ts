import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class ProductsSearchParams {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  skip?: number;

  @IsOptional()
  query?: string;
}
