import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateHashtagsArgs } from "./args/CreateHashtagsArgs";
import { Hashtags } from "../../../models/Hashtags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtags)
export class CreateHashtagsResolver {
  @TypeGraphQL.Mutation(_returns => Hashtags, {
    nullable: false
  })
  async createHashtags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateHashtagsArgs): Promise<Hashtags> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).hashtags.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
