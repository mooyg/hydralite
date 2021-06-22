import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateWithoutMembersInput } from "../inputs/PostGroupCreateWithoutMembersInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateOrConnectWithoutMembersInput {
  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PostGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostGroupCreateWithoutMembersInput, {
    nullable: false
  })
  create!: PostGroupCreateWithoutMembersInput;
}
