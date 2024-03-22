import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async products(params: {
    query?: string;
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<
    Pick<Product, 'image' | 'title' | 'vendor' | 'price' | 'strikedPrice'>[]
  > {
    const { skip, take, cursor, query, orderBy } = params;
    console.log({ params });
    return this.prisma.product.findMany({
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
      skip,
      take,
      cursor,
      orderBy,
    });
  }
}
