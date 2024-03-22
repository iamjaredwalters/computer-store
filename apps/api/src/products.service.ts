import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async products(params: {
    query?: string;
    page?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<{
    products: Pick<
      Product,
      'image' | 'title' | 'vendor' | 'price' | 'strikedPrice'
    >[];
    count: number;
  }> {
    const { page, cursor, query, orderBy } = params;
    const PAGE_SIZE = 12;
    console.log({ params });
    const count = await this.prisma.product.count({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { vendor: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    const products = await this.prisma.product.findMany({
      select: {
        title: true,
        price: true,
        vendor: true,
        strikedPrice: true,
        image: true,
      },
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { vendor: { contains: query, mode: 'insensitive' } },
        ],
      },
      skip: page * PAGE_SIZE,
      take: PAGE_SIZE,
      cursor,
      orderBy,
    });

    return { products, count };
  }
}
