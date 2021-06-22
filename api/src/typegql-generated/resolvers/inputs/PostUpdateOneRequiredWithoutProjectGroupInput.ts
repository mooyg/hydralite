import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutProjectGroupInput } from "../inputs/PostCreateOrConnectWithoutProjectGroupInput";
import { PostCreateWithoutProjectGroupInput } from "../inputs/PostCreateWithoutProjectGroupInput";
import { PostUpdateWithoutProjectGroupInput } from "../inputs/PostUpdateWithoutProjectGroupInput";
import { PostUpsertWithoutProjectGroupInput } from "../inputs/PostUpsertWithoutProjectGroupInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutProjectGroupInput, {
    nullable: true
  })
  create?: PostCreateWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutProjectGroupInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutProjectGroupInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutProjectGroupInput, {
    nullable: true
  })
  update?: PostUpdateWithoutProjectGroupInput | undefined;
}
