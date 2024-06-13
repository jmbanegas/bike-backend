const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const bikes = [
    {
      name: 'Mountain Bike',
      price: 99999,
      brand: 'Giant',
    },
    {
      name: 'Road Bike',
      price: 129999,
      brand: 'Trek',
    },
    {
      name: 'Hybrid Bike',
      price: 84999,
      brand: 'Cannondale',
    },
    // Puedes agregar más objetos de bicicletas según sea necesario
  ];

  for (const bike of bikes) {
    try {
      await prisma.bike.create({
        data: bike, // Los campos createdAT y updateAT se gestionan automáticamente
      });
    } catch (error) {
      if (error.code === 'P2002') {
        console.log(`La bicicleta con el nombre ${bike.name} ya existe.`);
      } else {
        console.error(error);
        throw error; // Lanza otros errores no controlados
      }
    }
  }

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
