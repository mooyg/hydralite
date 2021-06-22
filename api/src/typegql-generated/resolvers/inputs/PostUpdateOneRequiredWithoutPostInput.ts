import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostInput } from "../inputs/PostCreateOrConnectWithoutPostInput";
import { PostCreateWithoutPostInput } from "../inputs/PostCreateWithoutPostInput";
import { PostUpdateWithoutPostInput } from "../inputs/PostUpdateWithoutPostInput";
import { PostUpsertWithoutPostInput } from "../inputs/PostUpsertWithoutPostInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPostInput, {
    nullable: true
  })
  create?: PostCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutPostInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPostInput, {
    nullable: true
  })
  update?: PostUpdateWithoutPostInput | undefined;
}
