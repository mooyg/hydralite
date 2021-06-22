import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyCreatorInputEnvelope } from "../inputs/PostGroupCreateManyCreatorInputEnvelope";
import { PostGroupCreateOrConnectWithoutCreatorInput } from "../inputs/PostGroupCreateOrConnectWithoutCreatorInput";
import { PostGroupCreateWithoutCreatorInput } from "../inputs/PostGroupCreateWithoutCreatorInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostGroupCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PostGroupWhereUniqueInput[] | undefined;
}
