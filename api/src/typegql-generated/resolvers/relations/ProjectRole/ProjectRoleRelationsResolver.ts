import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { ProjectMember } from "../../../models/ProjectMember";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { ProjectRole } from "../../../models/ProjectRole";
import { ProjectRoleAssignedMembersArgs } from "./args/ProjectRoleAssignedMembersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRole)
export class ProjectRoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ProjectMember], {
    nullable: false
  })
  async assignedMembers(@TypeGraphQL.Root() projectRole: ProjectRole, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectRoleAssignedMembersArgs): Promise<ProjectMember[]> {
    return getPrismaFromContext(ctx).projectRole.findUnique({
      where: {
        id: projectRole.id,
      },
    }).assignedMembers(args);
  }

  @TypeGraphQL.FieldResolver(_type => ProjectMemberPermissions, {
    nullable: false
  })
  async permissions(@TypeGraphQL.Root() projectRole: ProjectRole, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectMemberPermissions> {
    return getPrismaFromContext(ctx).projectRole.findUnique({
      where: {
        id: projectRole.id,
      },
    }).permissions({});
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() projectRole: ProjectRole, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).projectRole.findUnique({
      where: {
        id: projectRole.id,
      },
    }).project({});
  }
}
