import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProjectGroupArgs } from "./args/GroupByProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { ProjectGroupGroupBy } from "../../outputs/ProjectGroupGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class GroupByProjectGroupResolver {
  @TypeGraphQL.Query(_returns => [ProjectGroupGroupBy], {
    nullable: false
  })
  async groupByProjectGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectGroupArgs): Promise<ProjectGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
