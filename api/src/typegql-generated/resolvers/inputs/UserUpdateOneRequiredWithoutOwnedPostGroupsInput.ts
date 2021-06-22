import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwnedPostGroupsInput } from "../inputs/UserCreateOrConnectWithoutOwnedPostGroupsInput";
import { UserCreateWithoutOwnedPostGroupsInput } from "../inputs/UserCreateWithoutOwnedPostGroupsInput";
import { UserUpdateWithoutOwnedPostGroupsInput } from "../inputs/UserUpdateWithoutOwnedPostGroupsInput";
import { UserUpsertWithoutOwnedPostGroupsInput } from "../inputs/UserUpsertWithoutOwnedPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOwnedPostGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOwnedPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedPostGroupsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOwnedPostGroupsInput | undefined;
}
