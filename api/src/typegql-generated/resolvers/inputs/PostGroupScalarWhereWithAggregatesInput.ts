import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostGroupScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isCommunity?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringNullableWithAggregatesFilter | undefined;
}
