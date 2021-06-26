import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCountAggregate } from "../outputs/ProjectMemberPermissionsCountAggregate";
import { ProjectMemberPermissionsMaxAggregate } from "../outputs/ProjectMemberPermissionsMaxAggregate";
import { ProjectMemberPermissionsMinAggregate } from "../outputs/ProjectMemberPermissionsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectMemberPermissionsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCountAggregate, {
    nullable: true
  })
  _count!: ProjectMemberPermissionsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsMinAggregate, {
    nullable: true
  })
  _min!: ProjectMemberPermissionsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectMemberPermissionsMaxAggregate | null;
}
