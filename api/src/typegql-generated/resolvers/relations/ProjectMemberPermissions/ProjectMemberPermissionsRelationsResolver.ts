import * as TypeGraphQL from "type-graphql";
import { ProjectMember } from "../../../models/ProjectMember";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { ProjectRole } from "../../../models/ProjectRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class ProjectMemberPermissionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ProjectRole, {
    nullable: true
  })
  async projectRole(@TypeGraphQL.Root() projectMemberPermissions: ProjectMemberPermissions, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectRole | null> {
    return getPrismaFromContext(ctx).projectMemberPermissions.findUnique({
      where: {
        id: projectMemberPermissions.id,
      },
    }).projectRole({});
  }

  @TypeGraphQL.FieldResolver(_type => ProjectMember, {
    nullable: true
  })
  async projectMember(@TypeGraphQL.Root() projectMemberPermissions: ProjectMemberPermissions, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectMember | null> {
    return getPrismaFromContext(ctx).projectMemberPermissions.findUnique({
      where: {
        id: projectMemberPermissions.id,
      },
    }).projectMember({});
  }
}
