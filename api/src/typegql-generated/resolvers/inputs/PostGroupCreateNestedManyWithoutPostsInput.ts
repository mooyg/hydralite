import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateOrConnectWithoutPostsInput } from "../inputs/PostGroupCreateOrConnectWithoutPostsInput";
import { PostGroupCreateWithoutPostsInput } from "../inputs/PostGroupCreateWithoutPostsInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateNestedManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutPostsInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PostGroupWhereUniqueInput[] | undefined;
}
