import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { PostGroup } from "../../../models/PostGroup";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { PostGroupMembersArgs } from "./args/PostGroupMembersArgs";
import { PostGroupPostsArgs } from "./args/PostGroupPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostGroup)
export class PostGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() postGroup: PostGroup, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).postGroup.findUnique({
      where: {
        id: postGroup.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() postGroup: PostGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostGroupMembersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).postGroup.findUnique({
      where: {
        id: postGroup.id,
      },
    }).members(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() postGroup: PostGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostGroupPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).postGroup.findUnique({
      where: {
        id: postGroup.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Root() postGroup: PostGroup, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).postGroup.findUnique({
      where: {
        id: postGroup.id,
      },
    }).project({});
  }
}
