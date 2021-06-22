import * as TypeGraphQL from "type-graphql";
import { Hashtag } from "../../../models/Hashtag";
import { OauthConnection } from "../../../models/OauthConnection";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { PostGroup } from "../../../models/PostGroup";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserAllProjectsArgs } from "./args/UserAllProjectsArgs";
import { UserCreatedHashtagsArgs } from "./args/UserCreatedHashtagsArgs";
import { UserCreatedPostCommentsArgs } from "./args/UserCreatedPostCommentsArgs";
import { UserFollowedProjectsArgs } from "./args/UserFollowedProjectsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedProjectsArgs } from "./args/UserLikedProjectsArgs";
import { UserMemberOfPostGroupsArgs } from "./args/UserMemberOfPostGroupsArgs";
import { UserOauthConnectionsArgs } from "./args/UserOauthConnectionsArgs";
import { UserOwnedPostGroupsArgs } from "./args/UserOwnedPostGroupsArgs";
import { UserOwnedProjectsArgs } from "./args/UserOwnedProjectsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async createdPostComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedPostCommentsArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdPostComments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtag], {
    nullable: false
  })
  async createdHashtags(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedHashtagsArgs): Promise<Hashtag[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdHashtags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostGroup], {
    nullable: false
  })
  async ownedPostGroups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOwnedPostGroupsArgs): Promise<PostGroup[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ownedPostGroups(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostGroup], {
    nullable: false
  })
  async memberOfPostGroups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMemberOfPostGroupsArgs): Promise<PostGroup[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).memberOfPostGroups(args);
  }
}
