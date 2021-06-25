import * as TypeGraphQL from "type-graphql";

export enum ProjectMemberPermissionsScalarFieldEnum {
  id = "id",
  canAccessFeatureRequests = "canAccessFeatureRequests",
  canAccessBugReports = "canAccessBugReports",
  canManageUsers = "canManageUsers",
  canManageRoles = "canManageRoles",
  canManageTasks = "canManageTasks",
  canCreateProjectAnnouncements = "canCreateProjectAnnouncements",
  canModeratePosts = "canModeratePosts",
  canManageProjectGroups = "canManageProjectGroups",
  canGenerateProjectInvites = "canGenerateProjectInvites",
  canViewRoadmap = "canViewRoadmap",
  canManageRoadmap = "canManageRoadmap",
  canScheduleRooms = "canScheduleRooms",
  canManageFundraisers = "canManageFundraisers",
  canManageThirdPartyApps = "canManageThirdPartyApps",
  canManageProjectSurveys = "canManageProjectSurveys",
  canViewProjectInsights = "canViewProjectInsights",
  canViewDeveloperInsights = "canViewDeveloperInsights",
  canManageProjectWaitlists = "canManageProjectWaitlists",
  canManageTesterOutsourcing = "canManageTesterOutsourcing",
  canWriteDeveloperReviews = "canWriteDeveloperReviews",
  canViewLogs = "canViewLogs"
}
TypeGraphQL.registerEnumType(ProjectMemberPermissionsScalarFieldEnum, {
  name: "ProjectMemberPermissionsScalarFieldEnum",
  description: undefined,
});
