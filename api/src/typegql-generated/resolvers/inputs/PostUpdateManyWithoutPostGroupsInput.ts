import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostGroupsInput } from "../inputs/PostCreateOrConnectWithoutPostGroupsInput";
import { PostCreateWithoutPostGroupsInput } from "../inputs/PostCreateWithoutPostGroupsInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutPostGroupsInput } from "../inputs/PostUpdateManyWithWhereWithoutPostGroupsInput";
import { PostUpdateWithWhereUniqueWithoutPostGroupsInput } from "../inputs/PostUpdateWithWhereUniqueWithoutPostGroupsInput";
import { PostUpsertWithWhereUniqueWithoutPostGroupsInput } from "../inputs/PostUpsertWithWhereUniqueWithoutPostGroupsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostGroupsInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostGroupsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutPostGroupsInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutPostGroupsInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutPostGroupsInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
