import { randomUUID } from "crypto";

import { PrismaClient } from "@prisma/client";

import * as data from "./codes-postaux.json";

async function main() {
  const prisma = new PrismaClient({ log: ["error"] });

  await prisma.$queryRawUnsafe("DELETE FROM city");

  if (Array.isArray(data)) {
    // eslint-disable-next-line no-restricted-syntax
    for await (const city of data) {
      await prisma.city.create({
        data: {
          id: randomUUID(),
          cityCode: city.codeCommune,
          postalCode: city.codePostal,
          cityName: city.nomCommune,
          routingWording: city.libelleAcheminement,
        },
      });
      // eslint-disable-next-line no-console
      console.log(city.codePostal);
    }
  }

  prisma.$disconnect();
}

main();
