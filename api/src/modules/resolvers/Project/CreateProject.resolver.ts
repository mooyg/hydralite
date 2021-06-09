import { Mutation, Resolver } from "type-graphql";
import Project from "~/db/entity/Project.entity";
import User from "~/db/entity/User.entity";
import faker from "faker";
@Resolver()
export default class CreateProjectResolver {
  @Mutation(() => Project)
  async createProject() {
    let user = (await User.find({ relations: ["profile"] }))[0];

    let project = new Project();

    project.title = faker.lorem.words();
    project.githubId = faker.datatype.number(9999999999);
    project.owner = user!;
    project.collaborators = [user!];
    project.likers = [user!];

    project = await project.save();

    user.likedProjects = [project];
    user = await user.save();

    await project.reload();
    return project;
  }
}
