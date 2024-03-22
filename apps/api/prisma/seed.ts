import { PrismaClient } from '@prisma/client';
import * as products from './products.json';

const prisma = new PrismaClient();

async function main() {
  for (const record of products) {
    const { 'striked-price': strikedPrice, ...p } = record;

    const product = await prisma.product.create({
      data: { ...p, strikedPrice },
    });
    console.log(`Added ${product.vendor} ${product.title}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
