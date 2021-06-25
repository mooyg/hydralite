import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProjectMemberPermissionsArgs } from "./args/GroupByProjectMemberPermissionsArgs";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { ProjectMemberPermissionsGroupBy } from "../../outputs/ProjectMemberPermissionsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class GroupByProjectMemberPermissionsResolver {
  @TypeGraphQL.Query(_returns => [ProjectMemberPermissionsGroupBy], {
    nullable: false
  })
  async groupByProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectMemberPermissionsArgs): Promise<ProjectMemberPermissionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
