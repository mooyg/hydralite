import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnedPostGroupsInput } from "../inputs/UserCreateWithoutOwnedPostGroupsInput";
import { UserUpdateWithoutOwnedPostGroupsInput } from "../inputs/UserUpdateWithoutOwnedPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutOwnedPostGroupsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnedPostGroupsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwnedPostGroupsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedPostGroupsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedPostGroupsInput;
}
