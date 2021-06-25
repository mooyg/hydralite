import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateNestedOneWithoutPermissionsInput } from "../inputs/ProjectRoleCreateNestedOneWithoutPermissionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canAccessFeatureRequests!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canAccessBugReports!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageUsers!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageRoles!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageTasks!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canCreateProjectAnnouncements!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canModeratePosts!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageProjectGroups!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canGenerateProjectInvites!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canViewRoadmap!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageRoadmap!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canScheduleRooms!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageFundraisers!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageThirdPartyApps!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageProjectSurveys!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canViewProjectInsights!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canViewDeveloperInsights!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageProjectWaitlists!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canManageTesterOutsourcing!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canWriteDeveloperReviews!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canViewLogs!: boolean;

  @TypeGraphQL.Field(_type => ProjectRoleCreateNestedOneWithoutPermissionsInput, {
    nullable: true
  })
  projectRole?: ProjectRoleCreateNestedOneWithoutPermissionsInput | undefined;
}
