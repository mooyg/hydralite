import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsOrderByInput } from "../../../inputs/ProjectMemberPermissionsOrderByInput";
import { ProjectMemberPermissionsWhereInput } from "../../../inputs/ProjectMemberPermissionsWhereInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../../../inputs/ProjectMemberPermissionsWhereUniqueInput";
import { ProjectMemberPermissionsScalarFieldEnum } from "../../../../enums/ProjectMemberPermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  where?: ProjectMemberPermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectMemberPermissionsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectMemberPermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "canAccessFeatureRequests" | "canAccessBugReports" | "canManageUsers" | "canManageRoles" | "canManageTasks" | "canCreateProjectAnnouncements" | "canModeratePosts" | "canManageProjectGroups" | "canGenerateProjectInvites" | "canViewRoadmap" | "canManageRoadmap" | "canScheduleRooms" | "canManageFundraisers" | "canManageThirdPartyApps" | "canManageProjectSurveys" | "canViewProjectInsights" | "canViewDeveloperInsights" | "canManageProjectWaitlists" | "canManageTesterOutsourcing" | "canWriteDeveloperReviews" | "canViewLogs"> | undefined;
}
