import * as TypeGraphQL from "type-graphql";
import { Attachments } from "../../../models/Attachments";
import { Hashtags } from "../../../models/Hashtags";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { User } from "../../../models/User";
import { PostPostArgs } from "./args/PostPostArgs";
import { PostPostCommentArgs } from "./args/PostPostCommentArgs";
import { PostProjectGroupArgs } from "./args/PostProjectGroupArgs";
import { PostTopicsArgs } from "./args/PostTopicsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async postedby(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).postedby({});
  }

  @TypeGraphQL.FieldResolver(_type => [ProjectGroup], {
    nullable: false
  })
  async ProjectGroup(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostProjectGroupArgs): Promise<ProjectGroup[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).ProjectGroup(args);
  }

  @TypeGraphQL.FieldResolver(_type => Attachments, {
    nullable: false
  })
  async files(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Attachments> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).files({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).comments({});
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).Post(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async PostComment(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostPostCommentArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).PostComment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtags], {
    nullable: false
  })
  async Topics(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostTopicsArgs): Promise<Hashtags[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).Topics(args);
  }
}
