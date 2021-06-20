import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
import { UserProfileCreateNestedManyWithoutFollowersInput } from "../inputs/UserProfileCreateNestedManyWithoutFollowersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateWithoutFollowersInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserProfileCreateNestedManyWithoutFollowersInput | undefined;
}
