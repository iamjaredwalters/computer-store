import { Controller, Get, Query } from '@nestjs/common';
import { ProductsSearchParams } from './products-search-service';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async find(@Query() { skip, query }: ProductsSearchParams) {
    console.log({ skip, query });
    const products = await this.productsService.products({
      skip,
      query,
    });
    // console.log(products);
    // res.status(HttpStatus.OK).json(products);
    return products;
  }
}
