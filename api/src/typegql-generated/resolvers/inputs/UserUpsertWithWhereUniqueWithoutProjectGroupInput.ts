import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectGroupInput } from "../inputs/UserCreateWithoutProjectGroupInput";
import { UserUpdateWithoutProjectGroupInput } from "../inputs/UserUpdateWithoutProjectGroupInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectGroupInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectGroupInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectGroupInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectGroupInput;
}
