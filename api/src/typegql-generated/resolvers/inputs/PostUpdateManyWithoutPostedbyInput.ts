import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostedbyInputEnvelope } from "../inputs/PostCreateManyPostedbyInputEnvelope";
import { PostCreateOrConnectWithoutPostedbyInput } from "../inputs/PostCreateOrConnectWithoutPostedbyInput";
import { PostCreateWithoutPostedbyInput } from "../inputs/PostCreateWithoutPostedbyInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutPostedbyInput } from "../inputs/PostUpdateManyWithWhereWithoutPostedbyInput";
import { PostUpdateWithWhereUniqueWithoutPostedbyInput } from "../inputs/PostUpdateWithWhereUniqueWithoutPostedbyInput";
import { PostUpsertWithWhereUniqueWithoutPostedbyInput } from "../inputs/PostUpsertWithWhereUniqueWithoutPostedbyInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostedbyInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostedbyInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutPostedbyInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPostedbyInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyPostedbyInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutPostedbyInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutPostedbyInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
