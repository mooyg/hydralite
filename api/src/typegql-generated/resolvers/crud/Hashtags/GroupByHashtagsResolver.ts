import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByHashtagsArgs } from "./args/GroupByHashtagsArgs";
import { Hashtags } from "../../../models/Hashtags";
import { HashtagsGroupBy } from "../../outputs/HashtagsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtags)
export class GroupByHashtagsResolver {
  @TypeGraphQL.Query(_returns => [HashtagsGroupBy], {
    nullable: false
  })
  async groupByHashtags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByHashtagsArgs): Promise<HashtagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).hashtags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
