import * as TypeGraphQL from "type-graphql";
import { Hashtags } from "../../../models/Hashtags";
import { OauthConnection } from "../../../models/OauthConnection";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { Project } from "../../../models/Project";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserAllProjectsArgs } from "./args/UserAllProjectsArgs";
import { UserFollowedProjectsArgs } from "./args/UserFollowedProjectsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedProjectsArgs } from "./args/UserLikedProjectsArgs";
import { UserOauthConnectionsArgs } from "./args/UserOauthConnectionsArgs";
import { UserOwnedProjectsArgs } from "./args/UserOwnedProjectsArgs";
import { UserPostArgs } from "./args/UserPostArgs";
import { UserPostCommentArgs } from "./args/UserPostCommentArgs";
import { UserTopicsArgs } from "./args/UserTopicsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => ProjectGroup, {
    nullable: true
  })
  async ProjectGroup(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectGroup | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ProjectGroup({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Post(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async PostComment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostCommentArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).PostComment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtags], {
    nullable: false
  })
  async Topics(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTopicsArgs): Promise<Hashtags[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Topics(args);
  }
}
