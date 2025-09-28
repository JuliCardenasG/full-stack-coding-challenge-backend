import path from 'path';
import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedInChunks(data: any[]) {
  const CHUNK_SIZE = 500;

  for (let i = 0; i < data.length; i += CHUNK_SIZE) {
    const chunk = data.slice(i, i + CHUNK_SIZE);
    await prisma.airport.createMany({
      data: chunk,
      skipDuplicates: true,
    });
    console.log(`Inserted records ${i} to ${i + chunk.length}`);
  }
}

async function main() {
  const airportDataPath = path.join(
    __dirname,
    '../../frontend/data/airports.json',
  );
  const airportData = JSON.parse(fs.readFileSync(airportDataPath, 'utf-8'));
  await seedInChunks(airportData);
  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
