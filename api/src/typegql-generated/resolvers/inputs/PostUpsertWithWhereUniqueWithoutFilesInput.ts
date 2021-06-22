import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutFilesInput } from "../inputs/PostCreateWithoutFilesInput";
import { PostUpdateWithoutFilesInput } from "../inputs/PostUpdateWithoutFilesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutFilesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutFilesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutFilesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutFilesInput, {
    nullable: false
  })
  create!: PostCreateWithoutFilesInput;
}
