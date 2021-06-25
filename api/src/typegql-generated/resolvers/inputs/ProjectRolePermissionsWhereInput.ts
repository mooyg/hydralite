import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ProjectRoleRelationFilter } from "../inputs/ProjectRoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsWhereInput {
  @TypeGraphQL.Field(_type => [ProjectRolePermissionsWhereInput], {
    nullable: true
  })
  AND?: ProjectRolePermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsWhereInput], {
    nullable: true
  })
  OR?: ProjectRolePermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRolePermissionsWhereInput], {
    nullable: true
  })
  NOT?: ProjectRolePermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canAccessFeatureRequests?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canAccessBugReports?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageUsers?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageRoles?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageTasks?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canCreateProjectAnnouncements?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canModeratePosts?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageProjectGroups?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canGenerateProjectInvites?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canViewRoadmap?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageRoadmap?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canScheduleRooms?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageFundraisers?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageThirdPartyApps?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageProjectSurveys?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canViewProjectInsights?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canViewDeveloperInsights?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageProjectWaitlists?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canManageTesterOutsourcing?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canWriteDeveloperReviews?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canViewLogs?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleRelationFilter, {
    nullable: true
  })
  projectRole?: ProjectRoleRelationFilter | undefined;
}
