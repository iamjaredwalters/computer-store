import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class ProductsSearchParams {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  take?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  skip?: number;
}
