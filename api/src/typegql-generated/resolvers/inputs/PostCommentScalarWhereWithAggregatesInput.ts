import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostCommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostCommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  body?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;
}
