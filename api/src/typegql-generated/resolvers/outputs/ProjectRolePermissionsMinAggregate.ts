import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectRolePermissionsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canAccessFeatureRequests!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canAccessBugReports!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageUsers!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageRoles!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageTasks!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canCreateProjectAnnouncements!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canModeratePosts!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageProjectGroups!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canGenerateProjectInvites!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canViewRoadmap!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageRoadmap!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canScheduleRooms!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageFundraisers!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageThirdPartyApps!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageProjectSurveys!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canViewProjectInsights!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canViewDeveloperInsights!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageProjectWaitlists!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canManageTesterOutsourcing!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canWriteDeveloperReviews!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canViewLogs!: boolean | null;
}
