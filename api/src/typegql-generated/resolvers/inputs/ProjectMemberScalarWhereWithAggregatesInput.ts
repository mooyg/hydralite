import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProjectMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProjectMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProjectMemberScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  awaitingApproval?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
