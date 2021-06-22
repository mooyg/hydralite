import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostedbyInputEnvelope } from "../inputs/PostCreateManyPostedbyInputEnvelope";
import { PostCreateOrConnectWithoutPostedbyInput } from "../inputs/PostCreateOrConnectWithoutPostedbyInput";
import { PostCreateWithoutPostedbyInput } from "../inputs/PostCreateWithoutPostedbyInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutPostedbyInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostedbyInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostedbyInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostedbyInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPostedbyInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyPostedbyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
