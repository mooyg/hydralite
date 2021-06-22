import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPostInput } from "../inputs/PostCreateWithoutPostInput";
import { PostUpdateWithoutPostInput } from "../inputs/PostUpdateWithoutPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostCreateWithoutPostInput;
}
