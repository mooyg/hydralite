import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectRoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectRoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectRoleScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  permissionsId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;
}
