import * as TypeGraphQL from "type-graphql";
import { OauthConnection } from "../../../models/OauthConnection";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserAllProjectsArgs } from "./args/UserAllProjectsArgs";
import { UserFollowedProjectsArgs } from "./args/UserFollowedProjectsArgs";
import { UserLikedProjectsArgs } from "./args/UserLikedProjectsArgs";
import { UserOauthConnectionsArgs } from "./args/UserOauthConnectionsArgs";
import { UserOwnedProjectsArgs } from "./args/UserOwnedProjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async ownedProjects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOwnedProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ownedProjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async allProjects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAllProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).allProjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async likedProjects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikedProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likedProjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async followedProjects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowedProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followedProjects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [OauthConnection], {
    nullable: false
  })
  async oauthConnections(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOauthConnectionsArgs): Promise<OauthConnection[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).oauthConnections(args);
  }
}
