import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateProjectRolePermissionsArgs } from "./args/UpdateProjectRolePermissionsArgs";
import { ProjectRolePermissions } from "../../../models/ProjectRolePermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRolePermissions)
export class UpdateProjectRolePermissionsResolver {
  @TypeGraphQL.Mutation(_returns => ProjectRolePermissions, {
    nullable: true
  })
  async updateProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProjectRolePermissionsArgs): Promise<ProjectRolePermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
