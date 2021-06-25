import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsOrderByInput } from "../../../inputs/ProjectRolePermissionsOrderByInput";
import { ProjectRolePermissionsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectRolePermissionsScalarWhereWithAggregatesInput";
import { ProjectRolePermissionsWhereInput } from "../../../inputs/ProjectRolePermissionsWhereInput";
import { ProjectRolePermissionsScalarFieldEnum } from "../../../../enums/ProjectRolePermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectRolePermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectRolePermissionsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "canAccessFeatureRequests" | "canAccessBugReports" | "canManageUsers" | "canManageRoles" | "canManageTasks" | "canCreateProjectAnnouncements" | "canModeratePosts" | "canManageProjectGroups" | "canGenerateProjectInvites" | "canViewRoadmap" | "canManageRoadmap" | "canScheduleRooms" | "canManageFundraisers" | "canManageThirdPartyApps" | "canManageProjectSurveys" | "canViewProjectInsights" | "canViewDeveloperInsights" | "canManageProjectWaitlists" | "canManageTesterOutsourcing" | "canWriteDeveloperReviews" | "canViewLogs">;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectRolePermissionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
