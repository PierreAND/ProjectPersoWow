/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({
  adapter: adapter as any,
});

async function main() {
  console.log('Start seeding...');

  const specialisation1 = await prisma.specialisation.create({
    data: {
      templates: {
        create: [
          {
            opti1: 'Hâte',
            opti2: 'Maîtrise',
          },
          {
            opti1: 'Critique',
            opti2: 'Versatilité',
          },
        ],
      },
      cycles: {
        create: [
          {
            monocible: 'Rotation DPS simple',
            zone: 'Donjons mythiques',
          },
          {
            monocible: 'Rotation DPS avancée',
            zone: 'Raids',
          },
        ],
      },
      glyphes: {
        create: [
          {
            majeur: 'Glyphe de puissance',
            mineur: 'Glyphe de vitesse',
          },
          {
            majeur: 'Glyphe de précision',
            mineur: "Glyphe d'endurance",
          },
        ],
      },
    },
  });

  const specialisation2 = await prisma.specialisation.create({
    data: {
      templates: {
        create: [
          {
            opti1: 'Intelligence',
            opti2: 'Hâte',
          },
        ],
      },
      cycles: {
        create: [
          {
            monocible: 'Rotation Heal',
            zone: 'Tous contenus',
          },
        ],
      },
      glyphes: {
        create: [
          {
            majeur: 'Glyphe de soin',
            mineur: 'Glyphe de régénération',
          },
        ],
      },
    },
  });

  console.log('Created specialisations:', { specialisation1, specialisation2 });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
