import { MikroORM } from "@mikro-orm/core";

const ormConfig = {
  entities: ["../dist/db/entity/**/*.entity.js"],
  entitiesTs: ["../src/db/entity/**/*.entity.js"],
  dbName: "devmark",
  type: "postgresql",
  clientUrl: "http://localhost:5432",
};

export default ormConfig as Parameters<typeof MikroORM.init>[0];
