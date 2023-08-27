// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles about Egypt
  const post1 = await prisma.article.upsert({
    where: { title: 'Exploring the Wonders of Egypt' },
    update: {},
    create: {
      title: 'Exploring the Wonders of Egypt',
      body: 'Egypt is a country rich in history and culture. From the majestic pyramids of Giza to the stunning temples of Luxor...',
      description:
        'Embark on a journey to discover the hidden treasures of Egypt and immerse yourself in its ancient civilization.',
      published: false,
      authorId: 'true',
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Egyptian Cuisine: A Gastronomic Delight' },
    update: {},
    create: {
      title: 'Egyptian Cuisine: A Gastronomic Delight',
      body: 'Indulge in the flavors of Egypt with its diverse and delicious cuisine. From savory dishes like koshary and falafel...',
      description:
        'Explore the culinary delights of Egypt and experience the unique blend of flavors that make its cuisine so special.',
      published: true,
      authorId: 'true',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
