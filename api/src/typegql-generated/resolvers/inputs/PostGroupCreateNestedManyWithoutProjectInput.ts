import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyProjectInputEnvelope } from "../inputs/PostGroupCreateManyProjectInputEnvelope";
import { PostGroupCreateOrConnectWithoutProjectInput } from "../inputs/PostGroupCreateOrConnectWithoutProjectInput";
import { PostGroupCreateWithoutProjectInput } from "../inputs/PostGroupCreateWithoutProjectInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutProjectInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: PostGroupCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PostGroupWhereUniqueInput[] | undefined;
}
