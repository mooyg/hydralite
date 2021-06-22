import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereInput], {
    nullable: true
  })
  AND?: ProjectGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereInput], {
    nullable: true
  })
  OR?: ProjectGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: ProjectGroupScalarWhereInput[] | undefined;

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
  postId?: StringFilter | undefined;
}
