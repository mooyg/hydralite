import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPostedbyInput } from "../inputs/PostCreateWithoutPostedbyInput";
import { PostUpdateWithoutPostedbyInput } from "../inputs/PostUpdateWithoutPostedbyInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPostedbyInput, {
    nullable: false
  })
  update!: PostUpdateWithoutPostedbyInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPostedbyInput, {
    nullable: false
  })
  create!: PostCreateWithoutPostedbyInput;
}
