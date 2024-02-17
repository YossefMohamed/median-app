// prisma/seed.js

const { PrismaClient } = require('@prisma/client');

// initialize Prisma Client
const prisma = new PrismaClient();
console.log(process.env.DATABASE_URL);

const postsData = [
  {
    title: 'Exploring the Wonders of Egypt',
    body: 'Egypt is a country rich in history and culture. From the majestic pyramids of Giza to the stunning temples of Luxor...',
    description:
      'Embark on a journey to discover the hidden treasures of Egypt and immerse yourself in its ancient civilization.',
    published: false,
    authorId: 'true',
  },
  {
    title: 'Egyptian Cuisine: A Gastronomic Delight',
    body: 'Indulge in the flavors of Egypt with its diverse and delicious cuisine. From savory dishes like koshary and falafel...',
    description:
      'Explore the culinary delights of Egypt and experience the unique blend of flavors that make its cuisine so special.',
    published: true,
    authorId: 'true',
  },
  {
    title: 'Ancient Temples of Karnak',
    body: 'Discover the architectural marvels of the Karnak Temple Complex in Luxor, Egypt...',
    description:
      'Explore the intricate hieroglyphs and massive columns of Karnak Temple...',
    published: true,
    authorId: 'true',
  },
  {
    title: 'Nile River Cruise Adventure',
    body: 'Embark on a journey along the Nile River and witness the beauty of Egypt...',
    description:
      'Cruise along the lifeblood of Egypt and experience its timeless landscapes...',
    published: true,
    authorId: 'true',
  },
  {
    title: 'The Great Sphinx of Giza',
    body: 'Unravel the mysteries surrounding the iconic Great Sphinx of Giza...',
    description: 'Explore the enigmatic features and legends of the Sphinx...',
    published: true,
    authorId: 'true',
  },
  {
    title: 'Luxor: The City of Temples',
    body: 'Step into the ancient city of Luxor and witness its majestic temples...',
    description: 'Discover the religious and cultural significance of Luxor...',
    published: false,
    authorId: 'true',
  },
  {
    title: 'Aswan: Gateway to Nubia',
    body: 'Explore the picturesque city of Aswan and its Nubian heritage...',
    description:
      'Discover the vibrant culture and stunning landscapes of Aswan...',
    published: true,
    authorId: 'true',
  },
  {
    title: 'Valley of the Kings: Tombs of Pharaohs',
    body: 'Journey into the Valley of the Kings and explore the tombs of ancient pharaohs...',
    description: "Uncover the secrets of Egypt's royal burial ground...",
    published: true,
    authorId: 'true',
  },
  {
    title: 'Cairo: City of Contrasts',
    body: 'Experience the hustle and bustle of Cairo, a city where ancient meets modern...',
    description:
      "Discover the iconic landmarks and vibrant culture of Egypt's capital...",
    published: false,
    authorId: 'true',
  },
  // Add more post data objects as needed
];

async function main() {
  const posts = [];

  for (const postData of postsData) {
    const post = await prisma.article.upsert({
      where: { title: postData.title },
      update: {},
      create: postData,
    });

    posts.push(post);
  }

  console.log('Added posts:', posts);
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
