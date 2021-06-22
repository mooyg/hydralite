import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutTopicsInput } from "../inputs/PostCreateNestedOneWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  numofPosts!: bigint;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutTopicsInput, {
    nullable: true
  })
  Post?: PostCreateNestedOneWithoutTopicsInput | undefined;
}
