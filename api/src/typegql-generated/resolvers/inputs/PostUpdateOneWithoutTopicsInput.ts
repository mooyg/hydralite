import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutTopicsInput } from "../inputs/PostCreateOrConnectWithoutTopicsInput";
import { PostCreateWithoutTopicsInput } from "../inputs/PostCreateWithoutTopicsInput";
import { PostUpdateWithoutTopicsInput } from "../inputs/PostUpdateWithoutTopicsInput";
import { PostUpsertWithoutTopicsInput } from "../inputs/PostUpsertWithoutTopicsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneWithoutTopicsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: PostCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutTopicsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutTopicsInput, {
    nullable: true
  })
  update?: PostUpdateWithoutTopicsInput | undefined;
}
