import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwnedPostGroupsInput } from "../inputs/UserCreateOrConnectWithoutOwnedPostGroupsInput";
import { UserCreateWithoutOwnedPostGroupsInput } from "../inputs/UserCreateWithoutOwnedPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutOwnedPostGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
