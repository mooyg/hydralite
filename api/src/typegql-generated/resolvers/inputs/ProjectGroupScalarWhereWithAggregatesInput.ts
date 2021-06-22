import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectGroupScalarWhereWithAggregatesInput[] | undefined;

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
  postId?: StringWithAggregatesFilter | undefined;
}
