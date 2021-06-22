import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateOrConnectWithoutPostsInput } from "../inputs/PostGroupCreateOrConnectWithoutPostsInput";
import { PostGroupCreateWithoutPostsInput } from "../inputs/PostGroupCreateWithoutPostsInput";
import { PostGroupScalarWhereInput } from "../inputs/PostGroupScalarWhereInput";
import { PostGroupUpdateManyWithWhereWithoutPostsInput } from "../inputs/PostGroupUpdateManyWithWhereWithoutPostsInput";
import { PostGroupUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/PostGroupUpdateWithWhereUniqueWithoutPostsInput";
import { PostGroupUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/PostGroupUpsertWithWhereUniqueWithoutPostsInput";
import { PostGroupWhereUniqueInput } from "../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [PostGroupCreateWithoutPostsInput], {
    nullable: true
  })
  create?: PostGroupCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: PostGroupCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  upsert?: PostGroupUpsertWithWhereUniqueWithoutPostsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PostGroupUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  update?: PostGroupUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupUpdateManyWithWhereWithoutPostsInput], {
    nullable: true
  })
  updateMany?: PostGroupUpdateManyWithWhereWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostGroupScalarWhereInput[] | undefined;
}
