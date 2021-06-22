import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostedbyInputEnvelope } from "../inputs/PostCommentCreateManyPostedbyInputEnvelope";
import { PostCommentCreateOrConnectWithoutPostedbyInput } from "../inputs/PostCommentCreateOrConnectWithoutPostedbyInput";
import { PostCommentCreateWithoutPostedbyInput } from "../inputs/PostCommentCreateWithoutPostedbyInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutPostedbyInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutPostedbyInput";
import { PostCommentUpdateWithWhereUniqueWithoutPostedbyInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutPostedbyInput";
import { PostCommentUpsertWithWhereUniqueWithoutPostedbyInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutPostedbyInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentUpdateManyWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutPostedbyInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutPostedbyInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutPostedbyInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyPostedbyInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyPostedbyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  set?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutPostedbyInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutPostedbyInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
