import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPostGroupsInput } from "../inputs/PostCreateOrConnectWithoutPostGroupsInput";
import { PostCreateWithoutPostGroupsInput } from "../inputs/PostCreateWithoutPostGroupsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPostGroupsInput], {
    nullable: true
  })
  create?: PostCreateWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPostGroupsInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
