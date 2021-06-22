import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutProjectGroupInput } from "../inputs/PostCreateOrConnectWithoutProjectGroupInput";
import { PostCreateWithoutProjectGroupInput } from "../inputs/PostCreateWithoutProjectGroupInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedOneWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutProjectGroupInput, {
    nullable: true
  })
  create?: PostCreateWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutProjectGroupInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
