import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberListRelationFilter } from "../inputs/ProjectMemberListRelationFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { ProjectRolePermissionsRelationFilter } from "../inputs/ProjectRolePermissionsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleWhereInput {
  @TypeGraphQL.Field(_type => [ProjectRoleWhereInput], {
    nullable: true
  })
  AND?: ProjectRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereInput], {
    nullable: true
  })
  OR?: ProjectRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereInput], {
    nullable: true
  })
  NOT?: ProjectRoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  linkedOpenEndedTasks?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberListRelationFilter, {
    nullable: true
  })
  assignedMembers?: ProjectMemberListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsRelationFilter, {
    nullable: true
  })
  permissions?: ProjectRolePermissionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  permissionsId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;
}
