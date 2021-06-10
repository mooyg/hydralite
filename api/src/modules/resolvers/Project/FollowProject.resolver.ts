import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import Project from "~/db/entity/Project.entity";
import User from "~/db/entity/User.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { FollowProjectInput } from "~/modules/input/Project/FollowProject.input";
import ContextType from "~/types/Context.type";

@Resolver()
export default class FollowProjectResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => Project)
  async followProject(
    @Arg("input") input: FollowProjectInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    const project = await Project.findOneOrFail(input.projectId, {
      relations: ["followers"],
    });

    // add user to project followers
    await getConnection()
      .createQueryBuilder()
      .relation(Project, "followers")
      .of(project)
      .add(user);

    await project.reload();
    return "Followed project.";
  }
}
