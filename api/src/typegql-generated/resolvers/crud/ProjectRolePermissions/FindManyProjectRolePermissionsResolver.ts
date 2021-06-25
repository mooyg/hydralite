import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyProjectRolePermissionsArgs } from "./args/FindManyProjectRolePermissionsArgs";
import { ProjectRolePermissions } from "../../../models/ProjectRolePermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRolePermissions)
export class FindManyProjectRolePermissionsResolver {
  @TypeGraphQL.Query(_returns => [ProjectRolePermissions], {
    nullable: false
  })
  async findManyProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectRolePermissionsArgs): Promise<ProjectRolePermissions[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
