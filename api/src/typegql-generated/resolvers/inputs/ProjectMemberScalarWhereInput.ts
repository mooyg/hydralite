import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectMemberScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  awaitingApproval?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectMemberPermissionsId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
