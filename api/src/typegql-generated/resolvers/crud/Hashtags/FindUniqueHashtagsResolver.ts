import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueHashtagsArgs } from "./args/FindUniqueHashtagsArgs";
import { Hashtags } from "../../../models/Hashtags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtags)
export class FindUniqueHashtagsResolver {
  @TypeGraphQL.Query(_returns => Hashtags, {
    nullable: true
  })
  async findUniqueHashtags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueHashtagsArgs): Promise<Hashtags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).hashtags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
