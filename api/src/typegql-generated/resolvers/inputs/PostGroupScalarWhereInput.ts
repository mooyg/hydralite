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
export class PostGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  AND?: PostGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  OR?: PostGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: PostGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCommunity?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  creatorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  projectId?: StringNullableFilter | undefined;
}
