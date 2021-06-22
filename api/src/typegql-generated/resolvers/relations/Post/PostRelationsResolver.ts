import * as TypeGraphQL from "type-graphql";
import { Attachment } from "../../../models/Attachment";
import { Hashtag } from "../../../models/Hashtag";
import { Post } from "../../../models/Post";
import { PostComment } from "../../../models/PostComment";
import { PostGroup } from "../../../models/PostGroup";
import { User } from "../../../models/User";
import { PostAttachmentsArgs } from "./args/PostAttachmentsArgs";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostHashtagsArgs } from "./args/PostHashtagsArgs";
import { PostPostGroupsArgs } from "./args/PostPostGroupsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PostGroup], {
    nullable: false
  })
  async postGroups(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostPostGroupsArgs): Promise<PostGroup[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).postGroups(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => [PostComment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentsArgs): Promise<PostComment[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Attachment], {
    nullable: false
  })
  async attachments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostAttachmentsArgs): Promise<Attachment[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).attachments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtag], {
    nullable: false
  })
  async hashtags(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostHashtagsArgs): Promise<Hashtag[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).hashtags(args);
  }
}
