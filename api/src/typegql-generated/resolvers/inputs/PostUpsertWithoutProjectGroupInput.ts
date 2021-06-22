import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutProjectGroupInput } from "../inputs/PostCreateWithoutProjectGroupInput";
import { PostUpdateWithoutProjectGroupInput } from "../inputs/PostUpdateWithoutProjectGroupInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutProjectGroupInput, {
    nullable: false
  })
  update!: PostUpdateWithoutProjectGroupInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutProjectGroupInput, {
    nullable: false
  })
  create!: PostCreateWithoutProjectGroupInput;
}
