import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateWithoutMemberOfPostGroupsInput";
import { UserUpdateWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateWithoutMemberOfPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMemberOfPostGroupsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMemberOfPostGroupsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMemberOfPostGroupsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMemberOfPostGroupsInput;
}
