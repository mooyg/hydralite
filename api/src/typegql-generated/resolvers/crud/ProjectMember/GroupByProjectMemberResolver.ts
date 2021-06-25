import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProjectMemberArgs } from "./args/GroupByProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { ProjectMemberGroupBy } from "../../outputs/ProjectMemberGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class GroupByProjectMemberResolver {
  @TypeGraphQL.Query(_returns => [ProjectMemberGroupBy], {
    nullable: false
  })
  async groupByProjectMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectMemberArgs): Promise<ProjectMemberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMember.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
