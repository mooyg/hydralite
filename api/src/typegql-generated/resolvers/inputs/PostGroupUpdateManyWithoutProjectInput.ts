import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyProjectInputEnvelope } from "../inputs/PostGroupCreateManyProjectInputEnvelope";
import { PostGroupCreateOrConnectWithoutProjectInput } from "../inputs/PostGroupCreateOrConnectWithoutProjectInput";
import { PostGroupCreateWithoutProjectInput } from "../inputs/PostGroupCreateWithoutProjectInput";
import { PostGroupScalarWhereInput } from "../inputs/PostGroupScalarWhereInput";
import { PostGroupUpdateManyWithWhereWithoutProjectInput } from "../inputs/PostGroupUpdateManyWithWhereWithoutProjectInput";
import { PostGroupUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/PostGroupUpdateWithWhereUniqueWithoutProjectInput";
import { PostGroupUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/PostGroupUpsertWithWhereUniqueWithoutProjectInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutProjectInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: PostGroupUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => PostGroupCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: PostGroupCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostGroupUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: PostGroupUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: PostGroupUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostGroupScalarWhereInput[] | undefined;
}
