import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { ProjectMember } from "../../../models/ProjectMember";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { ProjectRole } from "../../../models/ProjectRole";
import { User } from "../../../models/User";
import { ProjectMemberRolesArgs } from "./args/ProjectMemberRolesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class ProjectMemberRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ProjectRole], {
    nullable: false
  })
  async roles(@TypeGraphQL.Root() projectMember: ProjectMember, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectMemberRolesArgs): Promise<ProjectRole[]> {
    return getPrismaFromContext(ctx).projectMember.findUnique({
      where: {
        id: projectMember.id,
      },
    }).roles(args);
  }

  @TypeGraphQL.FieldResolver(_type => ProjectMemberPermissions, {
    nullable: true
  })
  async overallPermissions(@TypeGraphQL.Root() projectMember: ProjectMember, @TypeGraphQL.Ctx() ctx: any): Promise<ProjectMemberPermissions | null> {
    return getPrismaFromContext(ctx).projectMember.findUnique({
      where: {
        id: projectMember.id,
      },
    }).overallPermissions({});
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() projectMember: ProjectMember, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).projectMember.findUnique({
      where: {
        id: projectMember.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() projectMember: ProjectMember, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).projectMember.findUnique({
      where: {
        id: projectMember.id,
      },
    }).user({});
  }
}
