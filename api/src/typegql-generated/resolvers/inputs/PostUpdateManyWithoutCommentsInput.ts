import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyCommentsInputEnvelope } from "../inputs/PostCreateManyCommentsInputEnvelope";
import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCommentsInput } from "../inputs/PostUpdateManyWithWhereWithoutCommentsInput";
import { PostUpdateWithWhereUniqueWithoutCommentsInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCommentsInput";
import { PostUpsertWithWhereUniqueWithoutCommentsInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutCommentsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCommentsInput], {
    nullable: true
  })
  create?: PostCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutCommentsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyCommentsInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyCommentsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCommentsInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCommentsInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
