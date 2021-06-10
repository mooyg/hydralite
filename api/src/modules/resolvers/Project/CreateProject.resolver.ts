import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import Project from "~/db/entity/Project.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { CreateProjectInput } from "~/modules/input/Project/CreateProject.input";
import ContextType from "~/types/Context.type";
@Resolver()
export default class CreateProjectResolver {
  @Mutation(() => Project)
  @UseMiddleware(isAuthenticated)
  async createProject(
    @Arg("input") input: CreateProjectInput,
    @Ctx() { req }: ContextType
  ): Promise<Project | null> {
    // retrieve the project creator
    const user = (req as any).user;
    console.log(user);
    return null;
  }
}

// let user = (await User.find({ relations: ["profile"] }))[0];

// let project = new Project();

// project.title = faker.lorem.words();
// project.githubId = faker.datatype.number(9999999999);
// project.owner = user!;
// project.collaborators = [user!];
// project.likers = [user!];
// project.description = faker.lorem.paragraph();
// project.followers = [user];

// project = await project.save();

// user.likedProjects = [project];
// user = await user.save();

// await project.reload();
// return project;
