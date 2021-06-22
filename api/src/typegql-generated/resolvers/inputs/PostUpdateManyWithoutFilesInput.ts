import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyFilesInputEnvelope } from "../inputs/PostCreateManyFilesInputEnvelope";
import { PostCreateOrConnectWithoutFilesInput } from "../inputs/PostCreateOrConnectWithoutFilesInput";
import { PostCreateWithoutFilesInput } from "../inputs/PostCreateWithoutFilesInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutFilesInput } from "../inputs/PostUpdateManyWithWhereWithoutFilesInput";
import { PostUpdateWithWhereUniqueWithoutFilesInput } from "../inputs/PostUpdateWithWhereUniqueWithoutFilesInput";
import { PostUpsertWithWhereUniqueWithoutFilesInput } from "../inputs/PostUpsertWithWhereUniqueWithoutFilesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutFilesInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutFilesInput], {
    nullable: true
  })
  create?: PostCreateWithoutFilesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutFilesInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutFilesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutFilesInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutFilesInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyFilesInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyFilesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutFilesInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutFilesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutFilesInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutFilesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
