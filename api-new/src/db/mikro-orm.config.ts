import { MikroORM } from "@mikro-orm/core";

const ormConfig = {
  entities: ["./entity"],
  dbName: "devmark",
  type: "postgresql",
  clientUrl: "http://localhost:5432",
};

export default ormConfig as Parameters<typeof MikroORM.init>[0];
