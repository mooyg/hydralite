import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFollowersInput } from "../inputs/UserProfileCreateWithoutFollowersInput";
import { UserProfileUpdateWithoutFollowersInput } from "../inputs/UserProfileUpdateWithoutFollowersInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithWhereUniqueWithoutFollowersInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFollowersInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFollowersInput;
}
