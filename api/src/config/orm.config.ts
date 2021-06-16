import { ConnectionOptions } from "typeorm";
import { pathsToEntities } from "~/constants";

const ormConfig = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: process.env.DB_NAME || "hydralite",
  entities: pathsToEntities,
  synchronize: true,
  logging: false,
} as ConnectionOptions;

export default ormConfig;
