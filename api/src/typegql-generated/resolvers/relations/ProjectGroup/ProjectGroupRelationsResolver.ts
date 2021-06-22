import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { User } from "../../../models/User";
import { ProjectGroupMembersArgs } from "./args/ProjectGroupMembersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class ProjectGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() projectGroup: ProjectGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectGroupMembersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).projectGroup.findUnique({
      where: {
        id: projectGroup.id,
      },
    }).members(args);
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() projectGroup: ProjectGroup, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).projectGroup.findUnique({
      where: {
        id: projectGroup.id,
      },
    }).posts({});
  }
}
