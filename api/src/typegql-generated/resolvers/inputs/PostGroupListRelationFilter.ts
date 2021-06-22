import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupWhereInput } from "../inputs/PostGroupWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupListRelationFilter {
  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  every?: PostGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  some?: PostGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  none?: PostGroupWhereInput | undefined;
}
