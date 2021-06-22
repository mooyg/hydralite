import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyProjectGroupInputEnvelope } from "../inputs/UserCreateManyProjectGroupInputEnvelope";
import { UserCreateOrConnectWithoutProjectGroupInput } from "../inputs/UserCreateOrConnectWithoutProjectGroupInput";
import { UserCreateWithoutProjectGroupInput } from "../inputs/UserCreateWithoutProjectGroupInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutProjectGroupInput], {
    nullable: true
  })
  create?: UserCreateWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutProjectGroupInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyProjectGroupInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyProjectGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
