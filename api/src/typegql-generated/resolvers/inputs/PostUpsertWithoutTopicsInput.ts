import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutTopicsInput } from "../inputs/PostCreateWithoutTopicsInput";
import { PostUpdateWithoutTopicsInput } from "../inputs/PostUpdateWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutTopicsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutTopicsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: PostCreateWithoutTopicsInput;
}
