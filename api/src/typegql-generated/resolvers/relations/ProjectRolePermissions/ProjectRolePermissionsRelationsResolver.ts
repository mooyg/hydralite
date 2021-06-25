import * as TypeGraphQL from "type-graphql";
import { ProjectRole } from "../../../models/ProjectRole";
import { ProjectRolePermissions } from "../../../models/ProjectRolePermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRolePermissions)
export class ProjectRolePermissionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ProjectRole, {
    nullable: true
  })
  async projectRole(@TypeGraphQL.Root() projectRolePermissions: ProjectRolePermissions, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectRole | null> {
    return getPrismaFromContext(ctx).projectRolePermissions.findUnique({
      where: {
        id: projectRolePermissions.id,
      },
    }).projectRole({});
  }
}
