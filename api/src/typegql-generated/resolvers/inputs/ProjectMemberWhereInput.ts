import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ProjectMemberPermissionsRelationFilter } from "../inputs/ProjectMemberPermissionsRelationFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { ProjectRoleListRelationFilter } from "../inputs/ProjectRoleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberWhereInput {
  @TypeGraphQL.Field(_type => [ProjectMemberWhereInput], {
    nullable: true
  })
  AND?: ProjectMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereInput], {
    nullable: true
  })
  OR?: ProjectMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereInput], {
    nullable: true
  })
  NOT?: ProjectMemberWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleListRelationFilter, {
    nullable: true
  })
  roles?: ProjectRoleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  awaitingApproval?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsRelationFilter, {
    nullable: true
  })
  overallPermissions?: ProjectMemberPermissionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectMemberPermissionsId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
