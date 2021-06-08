import Project from "../../../db/entity/Project.entity";
import { Mutation, Resolver } from "type-graphql";
import User from "../../../db/entity/User.entity";
import faker from "faker";

@Resolver()
export default class CreateProjectResolver {
  @Mutation(() => Project)
  async createProject() {
    const user = await User.findOne(14, { relations: ["profile"] });

    console.log(user);

    return await Project.create({
      title: faker.lorem.words(),
      githubId: faker.datatype.number(9999999999),
      owner: user!,
      collaborators: [user!],
    }).save();
  }
}
