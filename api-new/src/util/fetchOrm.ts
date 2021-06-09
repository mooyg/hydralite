import { MikroORM } from "@mikro-orm/core";
import ormConfig from "../db/mikro-orm.config";

export default async function fetchOrm() {
  return await MikroORM.init(ormConfig);
}
