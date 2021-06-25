import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsOrderByInput } from "../../../inputs/ProjectRolePermissionsOrderByInput";
import { ProjectRolePermissionsWhereInput } from "../../../inputs/ProjectRolePermissionsWhereInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../../../inputs/ProjectRolePermissionsWhereUniqueInput";
import { ProjectRolePermissionsScalarFieldEnum } from "../../../../enums/ProjectRolePermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectRolePermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectRolePermissionsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectRolePermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "canAccessFeatureRequests" | "canAccessBugReports" | "canManageUsers" | "canManageRoles" | "canManageTasks" | "canCreateProjectAnnouncements" | "canModeratePosts" | "canManageProjectGroups" | "canGenerateProjectInvites" | "canViewRoadmap" | "canManageRoadmap" | "canScheduleRooms" | "canManageFundraisers" | "canManageThirdPartyApps" | "canManageProjectSurveys" | "canViewProjectInsights" | "canViewDeveloperInsights" | "canManageProjectWaitlists" | "canManageTesterOutsourcing" | "canWriteDeveloperReviews" | "canViewLogs"> | undefined;
}
