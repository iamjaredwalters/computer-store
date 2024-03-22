import { Controller, Get, Query } from '@nestjs/common';
import { ProductsSearchParams } from './products-search-service';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async find(@Query() { page, query }: ProductsSearchParams) {
    console.log({ page, query });
    const { products, count } = await this.productsService.products({
      page,
      query,
    });

    // console.log(products);
    // res.status(HttpStatus.OK).json(products);
    return { products, count };
  }
}
