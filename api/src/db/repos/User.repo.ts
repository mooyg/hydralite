import { EntityRepository, Repository } from "typeorm";
import User from "~/db/entity/User.entity";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
