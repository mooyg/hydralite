import { createConnection } from "typeorm";

export default async function createDbConnection() {
  return await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "devmark",
    entities: [__dirname + "\\db\\entity\\**\\*.entity.js"],
    synchronize: true,
    logging: false,
  });
}
