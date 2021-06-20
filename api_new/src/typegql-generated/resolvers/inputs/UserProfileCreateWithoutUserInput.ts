import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateNestedManyWithoutFollowersInput } from "../inputs/UserProfileCreateNestedManyWithoutFollowersInput";
import { UserProfileCreateNestedManyWithoutFollowingInput } from "../inputs/UserProfileCreateNestedManyWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatarURL!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserProfileCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserProfileCreateNestedManyWithoutFollowingInput | undefined;
}
