import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFollowingInput } from "../inputs/UserProfileCreateWithoutFollowingInput";
import { UserProfileUpdateWithoutFollowingInput } from "../inputs/UserProfileUpdateWithoutFollowingInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithWhereUniqueWithoutFollowingInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFollowingInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutFollowingInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFollowingInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFollowingInput;
}
