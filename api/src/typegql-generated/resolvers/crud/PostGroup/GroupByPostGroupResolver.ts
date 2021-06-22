import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPostGroupArgs } from "./args/GroupByPostGroupArgs";
import { PostGroup } from "../../../models/PostGroup";
import { PostGroupGroupBy } from "../../outputs/PostGroupGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostGroup)
export class GroupByPostGroupResolver {
  @TypeGraphQL.Query(_returns => [PostGroupGroupBy], {
    nullable: false
  })
  async groupByPostGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostGroupArgs): Promise<PostGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
