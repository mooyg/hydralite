import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateOrConnectWithoutMembersInput } from "../inputs/PostGroupCreateOrConnectWithoutMembersInput";
import { PostGroupCreateWithoutMembersInput } from "../inputs/PostGroupCreateWithoutMembersInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateNestedManyWithoutMembersInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutMembersInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutMembersInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PostGroupWhereUniqueInput[] | undefined;
}
