import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateManyWithoutFollowersInput } from "../inputs/UserProfileUpdateManyWithoutFollowersInput";
import { UserUpdateOneWithoutProfileInput } from "../inputs/UserUpdateOneWithoutProfileInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatarURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserProfileUpdateManyWithoutFollowersInput | undefined;
}
