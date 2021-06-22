import * as TypeGraphQL from "type-graphql";
import { Hashtags } from "../../../models/Hashtags";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtags)
export class HashtagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async createdBy(@TypeGraphQL.Root() hashtags: Hashtags, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).hashtags.findUnique({
      where: {
        id: hashtags.id,
      },
    }).createdBy({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: true
  })
  async Post(@TypeGraphQL.Root() hashtags: Hashtags, @TypeGraphQL.Ctx() ctx: any): Promise<Post | null> {
    return getPrismaFromContext(ctx).hashtags.findUnique({
      where: {
        id: hashtags.id,
      },
    }).Post({});
  }
}
