import * as TypeGraphQL from "type-graphql";
import { PostGroup } from "../../../models/PostGroup";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { ProjectFollowersArgs } from "./args/ProjectFollowersArgs";
import { ProjectLikersArgs } from "./args/ProjectLikersArgs";
import { ProjectMembersArgs } from "./args/ProjectMembersArgs";
import { ProjectPostGroupsArgs } from "./args/ProjectPostGroupsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectMembersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).members(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async likers(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectLikersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).likers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectFollowersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostGroup], {
    nullable: false
  })
  async postGroups(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectPostGroupsArgs): Promise<PostGroup[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).postGroups(args);
  }
}
