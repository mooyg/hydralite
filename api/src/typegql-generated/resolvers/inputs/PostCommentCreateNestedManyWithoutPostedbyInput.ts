import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostedbyInputEnvelope } from "../inputs/PostCommentCreateManyPostedbyInputEnvelope";
import { PostCommentCreateOrConnectWithoutPostedbyInput } from "../inputs/PostCommentCreateOrConnectWithoutPostedbyInput";
import { PostCommentCreateWithoutPostedbyInput } from "../inputs/PostCommentCreateWithoutPostedbyInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateNestedManyWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutPostedbyInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutPostedbyInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyPostedbyInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyPostedbyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
