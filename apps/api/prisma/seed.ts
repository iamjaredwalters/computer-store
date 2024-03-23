import { PrismaClient } from '@prisma/client';
import * as products from './products.json';

const prisma = new PrismaClient();

async function main() {
  try {
    const product = await prisma.product.findFirst({
      where: {
        title:
          'Dell OptiPlex Computer Desktop PC, Intel Core i5 3rd Gen 3.2 GHz, 16GB RAM, 2TB HDD, MTG, 22 Inch LED Monitor, RGB Keyboard and Mouse, WiFi, Windows 10 Pro (Renewed)',
      },
    });
    if (product) {
      console.log('Products already seeded!');
      return;
    }
  } catch (error) {
    console.error('Error checking if product exists in the database.');
    throw error;
  }

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
