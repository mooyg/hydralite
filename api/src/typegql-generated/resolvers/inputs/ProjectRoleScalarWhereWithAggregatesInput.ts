import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectRoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  linkedOpenEndedTasks?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  permissionsId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;
}
