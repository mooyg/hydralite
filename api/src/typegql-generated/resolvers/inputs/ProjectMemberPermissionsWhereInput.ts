import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { ProjectMemberRelationFilter } from "../inputs/ProjectMemberRelationFilter";
import { ProjectRoleRelationFilter } from "../inputs/ProjectRoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsWhereInput {
  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsWhereInput], {
    nullable: true
  })
  AND?: ProjectMemberPermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsWhereInput], {
    nullable: true
  })
  OR?: ProjectMemberPermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsWhereInput], {
    nullable: true
  })
  NOT?: ProjectMemberPermissionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canAccessFeatureRequests?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canAccessBugReports?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageUsers?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageRoles?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageTasks?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canCreateProjectAnnouncements?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canModeratePosts?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageProjectGroups?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canGenerateProjectInvites?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canViewRoadmap?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageRoadmap?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canScheduleRooms?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageFundraisers?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageThirdPartyApps?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageProjectSurveys?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canViewProjectInsights?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canViewDeveloperInsights?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageProjectWaitlists?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canManageTesterOutsourcing?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canWriteDeveloperReviews?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  canViewLogs?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleRelationFilter, {
    nullable: true
  })
  projectRole?: ProjectRoleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberRelationFilter, {
    nullable: true
  })
  projectMember?: ProjectMemberRelationFilter | undefined;
}
