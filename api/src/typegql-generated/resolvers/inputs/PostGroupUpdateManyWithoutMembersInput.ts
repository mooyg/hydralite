import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateOrConnectWithoutMembersInput } from "../inputs/PostGroupCreateOrConnectWithoutMembersInput";
import { PostGroupCreateWithoutMembersInput } from "../inputs/PostGroupCreateWithoutMembersInput";
import { PostGroupScalarWhereInput } from "../inputs/PostGroupScalarWhereInput";
import { PostGroupUpdateManyWithWhereWithoutMembersInput } from "../inputs/PostGroupUpdateManyWithWhereWithoutMembersInput";
import { PostGroupUpdateWithWhereUniqueWithoutMembersInput } from "../inputs/PostGroupUpdateWithWhereUniqueWithoutMembersInput";
import { PostGroupUpsertWithWhereUniqueWithoutMembersInput } from "../inputs/PostGroupUpsertWithWhereUniqueWithoutMembersInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateManyWithoutMembersInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutMembersInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutMembersInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpsertWithWhereUniqueWithoutMembersInput], {
    nullable: true
  })
  upsert?: PostGroupUpsertWithWhereUniqueWithoutMembersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PostGroupUpdateWithWhereUniqueWithoutMembersInput], {
    nullable: true
  })
  update?: PostGroupUpdateWithWhereUniqueWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpdateManyWithWhereWithoutMembersInput], {
    nullable: true
  })
  updateMany?: PostGroupUpdateManyWithWhereWithoutMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostGroupScalarWhereInput[] | undefined;
}
