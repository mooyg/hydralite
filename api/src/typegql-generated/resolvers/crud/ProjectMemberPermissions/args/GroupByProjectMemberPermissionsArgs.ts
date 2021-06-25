import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsOrderByInput } from "../../../inputs/ProjectMemberPermissionsOrderByInput";
import { ProjectMemberPermissionsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectMemberPermissionsScalarWhereWithAggregatesInput";
import { ProjectMemberPermissionsWhereInput } from "../../../inputs/ProjectMemberPermissionsWhereInput";
import { ProjectMemberPermissionsScalarFieldEnum } from "../../../../enums/ProjectMemberPermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectMemberPermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectMemberPermissionsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "canAccessFeatureRequests" | "canAccessBugReports" | "canManageUsers" | "canManageRoles" | "canManageTasks" | "canCreateProjectAnnouncements" | "canModeratePosts" | "canManageProjectGroups" | "canGenerateProjectInvites" | "canViewRoadmap" | "canManageRoadmap" | "canScheduleRooms" | "canManageFundraisers" | "canManageThirdPartyApps" | "canManageProjectSurveys" | "canViewProjectInsights" | "canViewDeveloperInsights" | "canManageProjectWaitlists" | "canManageTesterOutsourcing" | "canWriteDeveloperReviews" | "canViewLogs">;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectMemberPermissionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
