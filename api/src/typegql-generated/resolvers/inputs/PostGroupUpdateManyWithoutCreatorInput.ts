import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyCreatorInputEnvelope } from "../inputs/PostGroupCreateManyCreatorInputEnvelope";
import { PostGroupCreateOrConnectWithoutCreatorInput } from "../inputs/PostGroupCreateOrConnectWithoutCreatorInput";
import { PostGroupCreateWithoutCreatorInput } from "../inputs/PostGroupCreateWithoutCreatorInput";
import { PostGroupScalarWhereInput } from "../inputs/PostGroupScalarWhereInput";
import { PostGroupUpdateManyWithWhereWithoutCreatorInput } from "../inputs/PostGroupUpdateManyWithWhereWithoutCreatorInput";
import { PostGroupUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/PostGroupUpdateWithWhereUniqueWithoutCreatorInput";
import { PostGroupUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/PostGroupUpsertWithWhereUniqueWithoutCreatorInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: PostGroupUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: PostGroupCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PostGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  set?: PostGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: PostGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: PostGroupUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: PostGroupUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostGroupScalarWhereInput[] | undefined;
}
